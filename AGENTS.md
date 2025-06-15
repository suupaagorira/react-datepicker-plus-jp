# Repository Guidelines

This repository contains a React date picker component written in TypeScript.
Follow these rules when updating this project.

## Coding style
- Use 2 spaces for indentation and LF line endings. Keep lines under 80
  characters. Markdown files have no line length limit.
- Format all code with Prettier (`yarn prettier`). Run `yarn prettier:check` to
  verify formatting.
- Lint TypeScript/JavaScript with ESLint (`yarn lint`).
- Type-check with `yarn type-check`.
- Ensure tests pass with `yarn test`. Add tests for new features when possible.

## Environment
- Node.js version 22.x is used in CI. Install Node >=16 and Yarn 4 when
  developing locally.
- Use `yarn install` to install dependencies.

## Commit and PR
- Write clear commit messages. For larger changes include a short summary and a
  paragraph describing the impact.
- Use the PR template and check all boxes before requesting review.
