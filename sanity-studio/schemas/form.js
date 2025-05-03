export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'fields',
      title: 'Form Fields',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'label',
            title: 'Label',
            type: 'string'
          },
          {
            name: 'type',
            title: 'Field Type',
            type: 'string',
            options: {
              list: [
                'text',
                'email',
                'textarea',
                'select'
              ]
            }
          },
          {
            name: 'required',
            title: 'Required',
            type: 'boolean',
            initialValue: false
          }
        ]
      }]
    },
    {
      name: 'notificationEmail',
      title: 'Notification Email',
      type: 'string',
      validation: Rule => Rule.email()
    }
  ]
}