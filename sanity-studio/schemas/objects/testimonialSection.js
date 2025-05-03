export default {
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'quote',
            title: 'Quote',
            type: 'text'
          },
          {
            name: 'author',
            title: 'Author',
            type: 'string'
          },
          {
            name: 'role',
            title: 'Role',
            type: 'string'
          },
          {
            name: 'image',
            title: 'Author Image',
            type: 'image'
          }
        ]
      }]
    }
  ]
}