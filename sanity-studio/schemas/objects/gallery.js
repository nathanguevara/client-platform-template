export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'caption',
            title: 'Caption',
            type: 'string'
          },
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string'
          }
        ]
      }]
    }
  ]
}