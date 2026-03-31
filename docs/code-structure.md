# Code Structure Guide

This document describes the folder and file organization of the `src` directory for the project. Follow this structure to keep the codebase organized and maintainable.

---

## Top-Level Structure

```
src/
  app/
  components/
  constants/
  context/
  hooks/
  i18n.js
  lib/
  locales/
  services/
  styles/
  utils/
```

---

## Folder Descriptions

### `app/`

- **Purpose:** Contains all Next.js application routes and layouts, separated by domain (`(admin)`, `(client)`).
- **Structure:**
  - `(admin)/` — Admin dashboard routes and layouts.
  - `(client)/` — Client-facing routes and layouts.

### `components/`

- **Purpose:** Reusable UI and feature components, organized by domain and type.
- **Structure:**
  - `admin/` — Admin-specific components (custom, form, timer, ui, etc.).
  - `client/` — Client-specific components (custom, form, timer, ui, etc.).
  - `shared/` — Components shared between admin and client (logo, loaders, text, etc.).
  - `ui/` — General UI primitives (Button, Accordion, etc.).

### `constants/`

- **Purpose:** Static values and configuration used throughout the app.
- **Structure:**
  - `admin/`, `client/`, `shared/` — Domain-specific constants (e.g., menu items, environment variables).

### `context/`

- **Purpose:** React context providers for global state management.
- **Structure:**
  - `admin/`, `client/` — Domain-specific context providers.
  - `theme-context.js` — Theme context for the app.

### `hooks/`

- **Purpose:** Custom React hooks for shared logic (e.g., language provider).

### `i18n.js`

- **Purpose:** Internationalization (i18n) configuration and initialization.

### `lib/`

- **Purpose:** Utility libraries and shared logic (e.g., fonts, icons, helpers).

### `locales/`

- **Purpose:** Translation files for supported languages.
- **Structure:**
  - `en/`, `ar/` — English and Arabic translation JSON files, organized by feature/domain.

### `services/`

- **Purpose:** API and web service logic, organized by domain and feature.
- **Structure:**
  - `api/` — API service logic (admin, client, shared, etc.).
  - `web/` — Web service logic (admin, client, etc.).

### `styles/`

- **Purpose:** CSS and style modules, organized by domain and feature.
- **Structure:**
  - `admin/`, `client/`, `shared/` — Domain-specific global and modular styles.

### `utils/`

- **Purpose:** Utility functions for formatting, validation, and web helpers.
- **Structure:**
  - `formatting/`, `validation/`, `web/` — Organized by function and domain.

---

## Example: Admin App Route Structure

```
src/app/(admin)/dashboard/
  (auth)/
    login/
      page.js
  (main)/
    page.js
  (users)/
    admins/
      page.js
    subscribers/
      page.js
  ...
  layout.js
  providers.jsx
```

## Example: Client Components Structure

```
src/components/client/
  custom/
    alert/
    carousel/
    feature/
    ...
  form/
    checkbox/
    input/
    select/
  timer/
  ui/
    button/
    language-switcher/
    whatsapp/
```

---

## Guidelines

- Place new features in the appropriate domain folder (`admin`, `client`, or `shared`).
- Use `shared/` for code reused across both admin and client.
- Keep utility and service logic out of components.
- Organize translation files by feature/domain for scalability.
- Follow naming conventions as described in `docs/naming-conventions.md`.
- Use HTML tags instead of Tailwind classes for better SEO and accessibility and instead of using font size tailwind classes use html tags like h1, h2, h3, h4, h5, h6, p, span, etc with design typography theme sizes to maintain design all over the code and to be able to refactor easily in future if font family changed or design typography changed you can find example in `src/styles/client/modules/theme/__text/theme__text.css` and `src/styles/admin/modules/theme/__text/theme__text.css`.

---

For more details, see the [Naming Conventions](./naming-conventions.md) documentation.
