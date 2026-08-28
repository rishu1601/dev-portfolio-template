---
description: Update this portfolio's content and optionally commit/push/redeploy
---

The user wants to change their portfolio: $ARGUMENTS

Follow [AGENTS.md](../../AGENTS.md) for the data model and rules — read it
now if you haven't this session. In short: `config/profile.json` is the
only file that should change for a content edit; `lib/profile.ts` and a
new component only change if this is genuinely a new field/section (see
AGENTS.md's "Extension points" section for that case).

Steps:
1. Make the requested change in `config/profile.json` (and `lib/profile.ts`
   + a new component only for a new field/section, per AGENTS.md).
2. Run `npm run build` to verify it compiles and builds. Fix any errors
   before continuing — don't hand back a broken build.
3. Show a short summary of what changed.
4. Ask: "Commit this change?" If yes, commit with a short descriptive
   message (don't push yet).
5. Ask: "Push to GitHub?" (only if a remote is configured). If yes, push.
6. If `vercel` is installed and signed in (`vercel whoami` succeeds), ask:
   "Redeploy to Vercel?" If yes, run `vercel --prod`.

Don't commit, push, or deploy without asking first — the user should
always see what's being proposed before it happens on their real GitHub
repo / live site.
