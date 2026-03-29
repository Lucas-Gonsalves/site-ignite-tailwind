# Site Ignite Tailwind

A responsive settings dashboard UI built with Next.js, React, TypeScript, and Tailwind CSS.

This project focuses on front-end composition and reusable UI primitives. The main screen combines a collapsible sidebar, horizontal settings tabs, and a multi-section profile form with custom inputs such as select menus, file uploads, image preview, and animated file lists.

## Features

- Responsive application layout with a mobile-friendly collapsible sidebar
- Settings navigation with horizontally scrollable tabs
- Reusable form components for text input, textarea, buttons, and select fields
- File upload flow with avatar preview and animated project file list
- Tailwind CSS v4 styling with shared design tokens and utility-based composition
- Radix UI primitives for accessible interactive components

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI
- Framer Motion
- Lucide React
- Tailwind Variants

## Getting Started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run start` runs the production server
- `npm run lint` checks the codebase with ESLint

## Project Structure

```text
src/
  app/            Next.js app entry, root layout, and global styles
  components/     Reusable UI building blocks
  templates/      Page-level composition for the home/settings screen
  utils/          Static config and small utility helpers
public/           Static assets
```

## Main Interface

The current implementation renders a settings page with:

- a sidebar containing navigation, support/settings shortcuts, and a profile area
- a tab bar for settings categories such as profile, password, billing, and notifications
- a personal information form with name, email, role, country, timezone, bio, avatar upload, and portfolio file upload

## Notes

- This is currently a front-end focused project. The form uses default values and local component state, without a backend integration.
- The app already includes dark-mode-ready styles in several components.
