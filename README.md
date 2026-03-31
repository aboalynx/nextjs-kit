# Next.js Kit

## Project Documentation

Maintain consistency and quality by following these guidelines:

- 🏗️ **[Code Structure](./docs/code-structure.md)**: Overview of the `src` directory and domain separation (`admin`, `client`, `shared`).
- 🏷️ **[Naming Conventions](./docs/naming-conventions.md)**: Rules for file naming, component patterns, and state management.
- 🛠️ **[Tools & Resources](./docs/tools.md)**: Recommended tools for Tailwind colors, BEM methodology, and more.

## Development Standards

This project enforces high quality standards through automated git hooks:

- **Testing**: Every commit must pass all Unit (`npm run test:unit`) and E2E (`npm run test:e2e`) tests.
- **Coverage**: Unit test coverage must be **70% or higher** across all metrics.
- **Linting**: No ESLint warnings are allowed (`--max-warnings=0`).
- **Commits**: Messages must follow [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: ...`, `fix: ...`, `build: ...`).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev`: Start development server.
- `npm run test:unit`: Run Vitest unit tests.
- `npm run test:unit:changed`: Run Vitest only for changed files.
- `npm run test:e2e`: Run Playwright end-to-end tests.
- `npm run test:all`: Run both Unit and E2E tests.
- `npm run lint`: Run ESLint check.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
