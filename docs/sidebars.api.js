const makeSidebar = names =>
  names.map(name => {
    return {
      type: 'doc',
      id: name,
      className: `sidebar-api sidebar-api-${name}`,
    }
  })

module.exports = {
  sidebar: makeSidebar([
    'array',
    'boolean',
    'function',
    'guards',
    'number',
    'object',
    'option',
    'result',
  ]),
}
