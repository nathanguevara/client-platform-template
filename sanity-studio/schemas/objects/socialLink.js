export default {
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          'facebook',
          'twitter',
          'instagram',
          'linkedin',
          'youtube'
        ]
      }
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    }
  ]
}