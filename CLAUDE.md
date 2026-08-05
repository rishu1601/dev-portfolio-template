# CLAUDE.md

See [AGENTS.md](AGENTS.md) for the full project structure, the config-driven
data model, and extension points — it applies to Claude the same as any
other agent.

Quick orientation:
- All profile content lives in `config/profile.json`. Never hardcode a
  person's name/bio/experience/projects into a component.
- `lib/profile.ts` is the typed accessor components import from.
- Run `npm run build` after any content or component change.
