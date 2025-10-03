import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router'
import App from './App'
import ExpensesListPage from './routes/expenses.list'
import ExpenseDetailPage from './routes/expenses.detail'
import ExpenseNewPage from './routes/expenses.new'

// Root layout
const rootRoute = createRootRoute({
  component: () => <App />, 
})

// Home page
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <p>Home Page</p>,
})

// Expenses parent route (layout for all expenses pages)
const expensesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/expenses',
  component: () => <Outlet />, 
})

// Expenses child routes
const expensesListRoute = createRoute({
  getParentRoute: () => expensesRoute,
  path: '/', // /expenses → list
  component: ExpensesListPage,
})

export const expensesDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/expenses/$id', // /expenses/:id
  component: ExpenseDetailPage,
  validateParams: ({ id}) => ({
    id: Number(id),
  }),
})

const expensesNewRoute = createRoute({
  getParentRoute: () => expensesRoute,
  path: 'new', // /expenses/new (relative path)
  component: ExpenseNewPage,
})

expensesRoute.addChildren([expensesListRoute, expensesDetailRoute, expensesNewRoute])

// Build router tree
const routeTree = rootRoute.addChildren([indexRoute, expensesRoute])

export const router = createRouter({ routeTree })

router.update({
  defaultNotFoundComponent: () => <p>Page not found</p>,
  defaultErrorComponent: ({ error }) => <p>Error: {(error as Error).message}</p>,
})

export function AppRouter() {
  return <RouterProvider router={router} />
}
