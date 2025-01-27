import { OpenAIStream, StreamingTextResponse } from "ai"
import { Configuration, OpenAIApi } from "openai-edge"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export const runtime = "edge"

export async function POST(req: Request) {
  const { image } = await req.json()

  const response = await openai.createChatCompletion({
    model: "gpt-4-vision-preview",
    stream: true,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What food items do you see in this image? Please list them." },
          {
            type: "image_url",
            image_url: image,
          },
        ],
      },
    ],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}

