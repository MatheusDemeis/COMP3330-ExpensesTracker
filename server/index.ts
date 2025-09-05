// server/index.ts
import { app } from './app.ts'

const port = Number(process.env.PORT || 5173)

export default {
  port,
  fetch: app.fetch,
}

console.log(`🚀 Server running on http://localhost:${port}`)
