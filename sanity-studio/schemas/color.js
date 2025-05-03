export default {
  name: 'color',
  title: 'Color',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Color Name',
      type: 'string',
    },
    {
      name: 'hex',
      title: 'Hex Value',
      type: 'string',
      validation: (Rule) => Rule.regex(/^#([0-9A-F]{3}){1,2}$/i, {
        name: 'hex color',
        invert: false,
        message: 'Must be a valid hex code (e.g. #FFAA00)',
      }),
    },
  ],
}