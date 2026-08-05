# AGENTS.md

This repo is a Next.js portfolio **template**. It is meant to be cloned and
personalized — by a human, or by an automated flow (a CLI + AI agent) that
interviews a user and generates their content. This file documents how the
personalization boundary works so that any agent editing this repo does it
the right way.

## Source of truth: config/profile.json

All personal content — name, bio, social links, experience, skills,
education, projects, nav labels, and the About section's highlights/stats —
lives in [config/profile.json](config/profile.json). Nothing else in the
codebase should contain a person's name, bio text, job history, or project
list.

```
config/profile.json   <- the only file a generator should write to
lib/profile.ts        <- TypeScript types + typed accessors for the JSON above
components/*.tsx      <- read from lib/profile, render only
```

[lib/profile.ts](lib/profile.ts) defines the `ProfileData` interface and
casts the imported JSON to it, then re-exports named consts (`personalInfo`,
`about`, `experiences`, `skills`, `education`, `githubUsername`, `projects`,
`navigationConfig`). Components import from `@/lib/profile`, never from the
JSON file directly.

## Rules for generating/editing profile content

- Write to `config/profile.json` only. Do not put profile content directly
  into a component or add new hardcoded strings.
- Keep the JSON shape in sync with `ProfileData` in `lib/profile.ts`. If a
  new field is needed, add it to both the JSON and the interface in the same
  change.
- `about.highlights[].icon` and any other icon references are **string
  names** (e.g. `"Code"`, `"Lightbulb"`), not components — JSON can't hold a
  React component. The name must have a matching entry in the `iconMap` in
  [components/About.tsx](components/About.tsx). Add the lucide-react import
  and map entry there if you introduce a new icon name.
- Optional fields (`logo`, `image`, `liveUrl`, `blog`, etc.) may be empty
  string or omitted — components already guard for that. Don't add filler
  placeholder text.
- Images referenced from config (company logos, project screenshots) go in
  `public/` (e.g. `public/logos/`), referenced by root-relative path.
- The resume file goes in `public/`, with its filename set in
  `personalInfo.resume.filename`.

## Extension points

**Adding a new top-level profile field** (e.g. a new "certifications"
section):
1. Add the field to `config/profile.json`.
2. Add its type to the `ProfileData` interface in `lib/profile.ts` and export
   an accessor const.
3. Add a component under `components/` that consumes it via `@/lib/profile`.

**Adding/removing a nav section**: sections are driven by
`navigationConfig.order` + `navigationConfig.labels` in the config, and
[app/page.tsx](app/page.tsx) / [components/Navigation.tsx](components/Navigation.tsx)
both compute `shouldShowSection` from data presence (e.g. `experience` only
shows if `experiences.length > 0`). To add a section, add it to `order`,
give it a label, add the show/hide rule in both files, and render the new
component in `app/page.tsx`.

## What NOT to change without being asked

- Visual design, layout, animations (framer-motion variants, Tailwind
  classes) — this is a template's look and feel, not profile content.
- Component structure/abstractions beyond what a new field requires.

## Verifying a change

```bash
npm run lint
npm run build
```

A successful `next build` is the minimum bar before considering a
personalization pass complete.

## Repo relationships (for context)

This repo is one of three in the broader MVP design:
- `dev-portfolio-template` (this repo) — the Next.js site, config-driven.
- `create-dev-portfolio` — CLI that clones this template, runs the
  interview, and deploys.
- `portfolio-agent` — generates `config/profile.json` content from a resume
  / GitHub profile / interview answers.

Those two are separate repos/projects, not part of this one.
