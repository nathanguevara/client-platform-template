export default {
  name: 'formEmbedSection',
  title: 'Form Embed Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'form',
      title: 'Form',
      type: 'reference',
      to: [{ type: 'form' }]
    }
  ]
}