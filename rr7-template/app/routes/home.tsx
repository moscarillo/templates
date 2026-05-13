import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Home" }, { name: "description", content: "Welcome to the app!" }];
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Your App</h1>
        <p className="text-lg text-gray-600 mb-6">
          This is your new React Router v7 + Tailwind + Prisma template!
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              • Edit <code className="bg-gray-100 px-2 py-1 rounded">app/routes/home.tsx</code> to
              customize this page
            </li>
            <li>
              • Add new routes in{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">app/routes.ts</code>
            </li>
            <li>
              • Configure your database in{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">prisma/schema.prisma</code>
            </li>
            <li>
              • Run <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> to start
              developing
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
