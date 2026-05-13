# React Router v7 + Tailwind + Prisma Template

A modern, full-stack template with React Router v7, Tailwind CSS, Prisma, TypeScript, and comprehensive testing setup.

## Features

- ⚡ **React Router v7** - Latest version with file-based routing
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🗄️ **Prisma** - Type-safe database ORM
- 📝 **TypeScript** - Full type safety
- 🧪 **Testing** - Vitest for unit tests, Playwright for E2E
- 📏 **Linting & Formatting** - ESLint + Prettier
- 🐳 **Docker** - PostgreSQL database setup
- 🚀 **Vercel Ready** - Deploy configuration included

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment**
   ```bash
   cp .env.example .env
   ```

3. **Start the database**
   ```bash
   npm run db:up
   ```

4. **Run database migrations**
   ```bash
   npm run db:migrate
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

Visit [http://localhost:5173](http://localhost:5173) to see your app!

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run unit tests
- `npm run test:ui` - Run tests with UI
- `npm run test:e2e` - Run E2E tests
- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:reset` - Reset database

## Project Structure

```
├── app/                    # Application code
│   ├── components/         # React components
│   ├── routes/            # Route components
│   ├── lib/               # Utility libraries
│   ├── root.tsx           # Root component
│   ├── routes.ts          # Route configuration
│   └── app.css            # Global styles
├── prisma/                # Database schema and migrations
├── tests/                 # Test files
│   ├── e2e/              # End-to-end tests
│   └── setup/            # Test setup files
├── public/               # Static assets
└── build/                # Production build
```

## Database

This template uses PostgreSQL with Prisma. The database runs in Docker for easy development.

### Commands:
- `npm run db:up` - Start PostgreSQL container
- `npm run db:down` - Stop PostgreSQL container
- `npm run db:migrate` - Apply database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:reset` - Reset database and run migrations

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up your environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` configuration is already included.

### Other Platforms

The app builds to a standard Node.js server, so it can be deployed to any platform that supports Node.js.

## Customization

1. **Routes**: Add new routes in `app/routes.ts` and create corresponding files in `app/routes/`
2. **Database**: Modify `prisma/schema.prisma` and run `npm run db:migrate`
3. **Styling**: Customize Tailwind config in `tailwind.config.ts`
4. **Components**: Add reusable components in `app/components/`

## Learn More

- [React Router v7 Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Vitest Docs](https://vitest.dev)
- [Playwright Docs](https://playwright.dev)

## License

MIT