import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  apiVersion: import.meta.env.SANITY_STUDIO_API_VERSION,
  useCdn: true,
})