import page from './schemas/page'
import post from './schemas/post'
import menu from './schemas/menu'
import form from './schemas/form'
import siteSettings from './schemas/siteSettings'
import author from './schemas/author'
import category from './schemas/category'
import color from './schemas/color'

// Object types
import seo from './schemas/objects/seo'
import heroSection from './schemas/objects/heroSection'
import textBlock from './schemas/objects/textBlock'
import featureGrid from './schemas/objects/featureGrid'
import gallery from './schemas/objects/gallery'
import testimonialSection from './schemas/objects/testimonialSection'
import pricingTable from './schemas/objects/pricingTable'
import faqSection from './schemas/objects/faqSection'
import formEmbedSection from './schemas/objects/formEmbedSection'
import menuItem from './schemas/objects/menuItem'
import socialLink from './schemas/objects/socialLink'
import link from './schemas/objects/link'

export const schemaTypes = [
  // Documents
  page,
  post,
  menu,
  form,
  siteSettings,
  author,
  category,
  color,

  // Objects
  seo,
  heroSection,
  textBlock,
  featureGrid,
  gallery,
  testimonialSection,
  pricingTable,
  faqSection,
  formEmbedSection,
  menuItem,
  socialLink,
  link,
]
