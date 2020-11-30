const fs = require('fs')
const path = require('path')

const re = /.mdx?/
const resolveFiles = dir => {
  const files = fs.readdirSync(path.resolve(__dirname, 'docs', dir), { encoding: 'utf-8' })
  return files.map(file => file.replace(re, '')).sort().map(file => [dir, file].join('/'))
}

module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'doc',
      id: 'installation',
    },
    {
      type: 'doc',
      id: 'usage',
    },
    {
      type: 'category',
      label: 'Option',
      collapsed: true,
      items: resolveFiles('option'),
    },
    {
      type: 'category',
      label: 'Result',
      collapsed: true,
      items: resolveFiles('result'),
    },
    {
      type: 'category',
      label: 'Array',
      collapsed: true,
      items: resolveFiles('array'),
    },
  ],
};
