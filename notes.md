Lab1 - 
I never installed bun or hono before so that was new for me.
The thunder client extension was new too, never used before.
Lab 2 - 
Lab helped me remember some starter principles I forgot during the summer.
Lab 3 - 
Fixed the error handling so it looks better and consistent
PUT works as a full replacement and PATCH works as a partial update
PUT is used for replacing an entire resource and PATCH is used for updating specific fields
Lab 4 -
Replaced the in-memory expenses array with a real PostgreSQL database hosted on Neon
Defined a Drizzle ORM schema (id, title, amount) and configured drizzle.config.ts for migrations
Used bun run db:push to create the expenses table and verified it with Drizzle Studio
Tested all API operations using curl and confirmed proper HTTP responses
Lab 5 -
Missing baseUrl and paths in tsconfig.json caused ShadCN CLI warnings; references to non-existent tsconfig.app.json and tsconfig.node.json caused errors
@tailwind directives initially triggered editor warnings, but styles applied correctly
After fixing import alias, CLI generated button, card, and input components successfully