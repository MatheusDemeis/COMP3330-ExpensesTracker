import { Link, Outlet } from '@tanstack/react-router'

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-4xl p-6">
        <header className="flex items-center gap-6">
          <h1 className="text-2xl font-bold">Expenses App</h1>
          <nav className="flex gap-20 text-sm">
            <Link
              to="/"
              className="text-black font-medium hover:text-gray-700 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/expenses"
              className="text-black font-medium hover:text-gray-700 transition-colors"
            >
              Expenses
            </Link>
            <Link
              to="/expenses/new"
              className="text-black font-medium hover:text-gray-700 transition-colors"
            >
              New
            </Link>
          </nav>
        </header>

        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
