# Contributing Guide

Thanks for your interest in contributing to the ColorStack UT Austin website! We welcome contributions from ColorStack members and the wider community.

## Code of Conduct

By participating, you agree to follow our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Development Setup

1. Prereqs: Node 18+ and npm
2. Install deps: `npm install`
3. Start dev server: `npm run dev`
4. Lint: `npm run lint`

## How to Contribute

### 1) Fork and clone

- Fork the repository to your GitHub account
- Clone your fork:

```bash
git clone https://github.com/<your-username>/colorstack-ut.git
cd colorstack-ut
```

- Add the upstream remote:

```bash
git remote add upstream https://github.com/<upstream-org-or-owner>/colorstack-ut.git
```

### 2) Create a feature branch

```bash
git checkout -b feat/<short-descriptor>
# e.g. feat/navbar-logo, fix/events-date-format, docs/update-readme
```

Keep branches focused and short-lived.

### 3) Make changes

- Follow the existing code style
- Keep components small and composable
- Prefer descriptive names and clear props
- Run `npm run lint` and fix issues

### 4) Commit conventions

We prefer conventional commits:

- `feat: add hero CTA`
- `fix: handle mobile overflow`
- `docs: update contributing`
- `refactor: simplify sponsors grid`
- `chore: bump dependencies`

### 5) Sync with upstream (if needed)

```bash
git fetch upstream
git rebase upstream/main
# or merge if you prefer
```

Resolve conflicts locally and re-run the app.

### 6) Push and open a PR

```bash
git push -u origin feat/<short-descriptor>
```

Open a Pull Request against `main`:

- Fill out the PR template
- Include screenshots for UI changes
- Link related issues (e.g. `Closes #123`)

A maintainer will review your PR. We generally squash-merge once approved.

## Issue Tracker

- Use the provided issue templates
- Label issues (`bug`, `feature`, `design`, `good first issue`)
- Provide reproduction steps and screenshots where helpful

## Project Standards

- Accessibility: semantic HTML, labels, keyboard focus
- Performance: optimize images, avoid unnecessary re-renders
- UI Consistency: use shared UI primitives in `components/ui`
- Theming: use Tailwind tokens and `--primary` for brand color

## Local Tips

- Add new sections under `components/` and compose in `app/page.tsx`
- Place public images in `public/` (e.g. `public/logos/...`)
- Configure new remote image domains in `next.config.ts` if needed

## Help

If you get stuck, open a discussion or issue. Thanks for helping build this project! 💙🧡
