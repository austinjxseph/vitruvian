import * as prismic from '@prismicio/client'

const repositoryName = 'vitruvian'
const client = prismic.createClient(repositoryName)

async function testFetch() {
  try {
    const page = await client.getByUID('page', 'about')
    console.log('About page slices:')
    console.log(JSON.stringify(page.data.slices, null, 2))
  } catch (error) {
    console.error('Error:', error.message)
  }
}

testFetch()
