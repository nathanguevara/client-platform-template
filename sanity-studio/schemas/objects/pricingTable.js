export default {
  name: 'pricingTable',
  title: 'Pricing Table',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'plans',
      title: 'Pricing Plans',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Plan Name',
            type: 'string'
          },
          {
            name: 'price',
            title: 'Price',
            type: 'string'
          },
          {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }]
          },
          {
            name: 'cta',
            title: 'Call to Action',
            type: 'link'
          }
        ]
      }]
    }
  ]
}