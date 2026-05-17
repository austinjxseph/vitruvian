# Kirby CMS Dockerfile for Railway
FROM php:8.4-apache

# Install system deps + all PHP extensions Kirby requires
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libwebp-dev \
    libfreetype-dev \
    imagemagick \
    libmagickwand-dev \
    libzip-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    libonig-dev \
    libicu-dev \
    libexif-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-configure intl \
    && docker-php-ext-install gd zip mbstring dom xml curl intl exif opcache \
    && pecl install imagick \
    && docker-php-ext-enable imagick \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Enable required Apache modules
RUN a2enmod rewrite headers expires

# Tune MPM prefork to handle more concurrent connections
COPY apache.conf /etc/apache2/conf-available/mpm-tuning.conf
RUN a2enconf mpm-tuning

# Set document root to Kirby directory
ENV APACHE_DOCUMENT_ROOT /var/www/html
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Allow .htaccess overrides
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# Copy Kirby files
COPY . /var/www/html/

# Keep optional first-boot seed copies for the Railway volume bootstrap.
RUN mkdir -p /var/www/html/content-seed /var/www/html/site-accounts-seed \
    && if [ -d /var/www/html/content ]; then cp -a /var/www/html/content/. /var/www/html/content-seed/; fi \
    && if [ -d /var/www/html/site/accounts ]; then cp -a /var/www/html/site/accounts/. /var/www/html/site-accounts-seed/; fi \
    && chmod +x /var/www/html/bin/railway-start.sh

# Install PHP dependencies
RUN cd /var/www/html && composer install --no-dev --optimize-autoloader --no-interaction

# Create media directory (generated at runtime by Kirby, not in repo)
RUN mkdir -p /var/www/html/media

# Set permissions — www-data needs write access for media, cache, sessions, accounts
RUN chown -R www-data:www-data /var/www/html

# Fix MPM conflict + set Railway $PORT at runtime, then start Apache
CMD ["/var/www/html/bin/railway-start.sh"]
