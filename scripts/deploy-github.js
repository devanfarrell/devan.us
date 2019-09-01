const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/devanfarrell/devandotus.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)