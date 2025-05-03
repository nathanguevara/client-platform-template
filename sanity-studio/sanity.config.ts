import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import deskStructure from './deskStructure.js'

// Load and validate environment variables
const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET
const apiVersion = process.env.SANITY_STUDIO_API_VERSION

if (!projectId || !dataset || !apiVersion) {
  throw new Error('Missing required environment variables: projectId, dataset, or apiVersion.')
}

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio Schema Starter',

  projectId,
  dataset,

  plugins: [
    deskTool({ structure: deskStructure }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },

  api: {
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // set to true if using a read-only frontend
  },
})