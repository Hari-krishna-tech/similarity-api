import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  organization: "org-xxxx",
  apiKey: process.env.OPENAI_API_KEY,
})

export const openai = new OpenAIApi(configuration)