import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'


type Expense = { id: number; title: string; amount: number }
const API = '/api'

export default function ExpenseDetailPage() {
const { id } = useParams({ from: "/expenses/$id" })
  if (!id) return <p>Invalid expense ID</p>

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['expenses', id],
    queryFn: async () => {
      const res = await fetch(`${API}/expenses/${id}`)
      if (!res.ok) throw new Error(`Failed to fetch expense with id ${id}`)
      return res.json() as Promise<{ expense: Expense }>
    },
  })

  if (isLoading) return <p>Loading…</p>
  if (isError) return <p>Error: {(error as Error).message}</p>

  const item = data?.expense
  if (!item) return <p>Expense not found.</p>

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Amount:</span> ${item.amount}
      </p>
    </div>
  )
  
}
