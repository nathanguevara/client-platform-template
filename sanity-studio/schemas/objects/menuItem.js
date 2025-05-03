export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    },
    {
      name: 'children',
      title: 'Child Menu Items',
      type: 'array',
      of: [{ type: 'menuItem' }]
    }
  ]
}