import {z} from "zod"

export interface AiPrompt {
  model: string
  prompt: string
}

export const AiPromptSchema = z.object({
  model: z.string().min(3).max(25),
  prompt: z.string().min(25).max(255)
})