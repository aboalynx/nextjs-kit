# Naming Conventions and Best Practices

This document outlines the coding style, naming conventions, and best practices for the Next.js project. Adhering to these conventions ensures consistency, readability, and maintainability across the codebase.

## High-Level Architecture: `client`, `admin`, `shared`

The project is broadly divided into three main contexts:

- **`client`**: Code related to the client-facing application.
- **`admin`**: Code related to the admin dashboard.
- **`shared`**: Code that is used by both `client` and `admin` contexts.

This separation is reflected in various top-level directories like `components`, `styles`, `services`, `utils`, and `constants`. When adding new files, place them in the directory corresponding to their context.

## Directory Structure

- `src/app/` - Root directory for all routes and layouts, following Next.js App Router conventions.
  - `(client)/` - Route group for the client application.
  - `(admin)/` - Route group for the admin dashboard.
- `src/components/` - Reusable React components.
  - `client/` - Components used only in the client app.
  - `admin/` - Components used only in the admin dashboard.
  - `shared/` - Components used in both contexts.
  - `ui/` - Generic, unstyled UI primitives (e.g., from shadcn/ui).
- `src/services/` - Business logic, API communication, and external services.
- `src/hooks/` - Custom React hooks.
- `src/styles/` - Global styles and CSS modules.
- `src/utils/` - Utility functions.
- `src/constants/` - Application-wide constants.
- `src/locales/` - Translation files for internationalization (i18n).

## File Naming Conventions

| File Type            | Convention       | Example(s)                                  |
| -------------------- | ---------------- | ------------------------------------------- |
| Components           | `PascalCase.jsx` | `UserProfile.jsx`, `Button.jsx`             |
| Pages & Layouts      | `lowercase.jsx`  | `page.jsx`, `layout.jsx`, `not-found.jsx`   |
| Hooks                | `kebab-case.js`  | `use-auth.js`, `use-form.js`                |
| Services             | `kebab-case.js`  | `auth-service.js`, `pricing-service.js`     |
| Utilities            | `kebab-case.js`  | `format-date.js`, `handle-api-error.js`     |
| Constants            | `kebab-case.js`  | `menu-items.js`, `api-endpoints.js`         |
| Styles (CSS Modules) | `kebab-case.css` | `header.module.css`, `user-card.module.css` |
| Config Files         | `lowercase.js`   | `i18n.js`, `next.config.js`                 |

**Note:** Use the `.jsx` extension for files containing JSX syntax. Use `.js` for plain JavaScript files (like configs or services).

## Component Naming and Props

- **Component Names:** Use `PascalCase` for component functions and filenames.
- **Props:** Use `camelCase` for prop names. Destructure props for clarity.

```jsx
// Good
import PropTypes from 'prop-types';

export default function UserProfile({ user, onUpdate }) {
  // ...
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// Bad
const user_profile = (props) => {
  /* ... */
};
```

## State and Variable Naming

- Use `camelCase` for all variables and state.
- Use descriptive prefixes for booleans: `isLoading`, `isAuthenticated`, `hasError`.
- Use prefixes for event handlers: `handleSubmit` for functions defined within the component and `onUpdate` for function props passed from a parent.

```jsx
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = (event) => {
  // ...
};

return <form onSubmit={handleSubmit}>...</form>;
```

## CSS and Styling

### Global Styles & CSS Modules

The project uses a combination of global styles and CSS modules with a BEM-like convention.

- **Directory Structure**: Styles are organized by context (`admin`, `client`) inside `src/styles/modules`.
- **File Naming**: Files are named based on the component or feature they style (e.g., `form__input.css`). Double underscores (`__`) separate the block from the element.

### Tailwind CSS

For utility-first styling, follow these best practices:

1.  **Group related classes logically.**
2.  **Use consistent ordering:**
    1.  Layout (e.g., `display`, `position`, `flex`)
    2.  Box Model (e.g., `width`, `height`, `margin`, `padding`)
    3.  Typography (e.g., `font-size`, `font-weight`, `color`)
    4.  Visuals (e.g., `background-color`, `border`, `box-shadow`)
    5.  States (e.g., `hover:`, `focus:`)

## Services (API Layer)

- **Location**: API service files are located in `src/services/api/`.
- **File Naming**: `kebab-case.js` (e.g., `auth-service.js`).
- **Function Naming**: Exported functions should be `camelCase` and describe the action they perform.

```javascript
// src/services/api/client/auth/auth-service.js

export const login = async (credentials) => {
  // ...
};

export const fetchUserProfile = async () => {
  // ...
};
```

## Environment Variables

- Use `UPPER_SNAKE_CASE`.
- Prefix with `NEXT_PUBLIC_` for variables exposed to the browser.
- Define them in `.env.local` for development.

Example: `NEXT_PUBLIC_API_BASE_URL`, `STRIPE_SECRET_KEY`.

## General Best Practices

1.  **Consistency**: Above all, be consistent with the existing code.
2.  **Descriptive Names**: Use clear, intention-revealing names for files, variables, and functions. Avoid abbreviations.
3.  **Single Responsibility**: Keep components, functions, and modules focused on a single task.
4.  **Documentation**: Add JSDoc comments for complex functions, hooks, and components to explain their purpose, parameters, and return values.

By following these guidelines, we can build a scalable and maintainable application together.

## Before Push to Git run the following commands in terminal and solve it if problems found :

1 - **Check Code Problem**:

```bash
 npx eslint .
```

2 - **Adjust Code Styles**:

```bash
npx prettier --write .
```
