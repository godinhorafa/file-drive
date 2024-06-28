# File Storage Project

#### EN

This project is a comprehensive file storage application featuring organizations, file upload and management, role-based authorization, authentication, scheduled file deletions, favorites, and trash functionalities. The UI is rich with components like dialogs, modals, toasts, and dropdowns.

#### BR

Este projeto é uma aplicação abrangente de armazenamento de arquivos que inclui organizações, upload e gerenciamento de arquivos, autorização baseada em funções, autenticação, exclusão programada de arquivos, favoritos e funcionalidades de lixeira. A interface do usuário é rica em componentes como diálogos, modais, alertas e menus suspensos.

## Stack

- TypeScript: Strongly typed programming language.
- Next.js: React framework for building server-side rendered applications.
- Shadcn: UI components library.
- Tailwind CSS: Utility-first CSS framework.
- Convex: Backend database and logic.
- Clerk: Authentication and user management.

## Features

- Organizations: Manage files within different organizations.
- File Upload and Management: Upload and manage files easily.
- Role-Based Authorization: Secure access control based on user roles.
- Authentication: User authentication using Clerk.
- Scheduled File Deletions: Automatically delete files using cron jobs.
- Favorites and Trash: Mark files as favorites and move files to trash.
- UI Components: Includes dialogs, modals, toasts, dropdowns, and more.

## Installation

Clone the repository

```bash
  git clone https://github.com/godinhorafa/files-storage.git
```

Navigate to the project directory

```bash
cd file-storage
```

Install the dependencies

```bash
npm install
```

## Usage

#### 1. Configure the necessary environment variables for Convex and Clerk

#### 2. Start the convex server

```bash
  npx convex dev
```

#### 3. Start the development server

```bash
  npm run dev
```

#### 4.Open your browser and go to:

http://localhost:3000

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
