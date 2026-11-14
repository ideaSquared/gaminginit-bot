# CLAUDE.md

WARDOGS Discord bot: a Cloudflare Worker plus a Node/Docker entry (see README).

## Logging

- Server code logs through @ideasquared/log via `src/log.ts`, never `console.*`.
- No personal data or secrets: never player names, Steam IDs, Discord user IDs, chat text or tokens. Log ids, counts and match ids.
- CI fails on console calls in `src`.
- Load the `logging` skill before adding or changing a log line.

## Working rules

- Type-check with `pnpm run typecheck` (checks both `tsconfig.json` and `tsconfig.worker.json`).
- Run tests with `pnpm test` (Vitest).
- Node >= 22.18 and pnpm 10; `pnpm start` runs the Node entry, `pnpm run deploy` deploys the Worker.
- `scripts/` holds the CLI (command registration) and is exempt from the no-console check.
