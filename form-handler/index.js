import express from 'express'
import bodyParser from 'body-parser'
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 8787

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body
  console.log(req.body)

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const { data, error } = await supabase
    .from('leads')
    .insert([{ name, email, message }])

  if (error) {
    console.error('Supabase error:', error)
    return res.status(500).json({ error: 'Failed to store submission' })
  }

  res.status(200).json({ success: true, data })
})

app.listen(port, () => {
  console.log(`Form handler listening on http://localhost:${port}`)
})