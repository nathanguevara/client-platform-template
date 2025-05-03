export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'color'
    },
    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'link' }]
    },
    {
      name: 'socialProfiles',
      title: 'Social Media Profiles',
      type: 'array',
      of: [{ type: 'socialLink' }]
    },
    {
      name: 'headScripts',
      title: 'Head Scripts',
      type: 'text'
    },
    {
      name: 'footerScripts',
      title: 'Footer Scripts',
      type: 'text'
    }
  ]
}