import { cn } from "@/lib/utils"
export default function StatsCardAdmin({
  totalProducts,
  approvedProducts,
  rejectedProducts,
  pendingProducts,
}: {
  totalProducts: number
  approvedProducts: number
  rejectedProducts: number
  pendingProducts: number
}) {
  const stats = [
    {
      label: "Total",
      count: totalProducts,
      color: "bg-yellow-100",
    },
    {
      label: "Approved",
      count: approvedProducts,
      color: "bg-green-100",
    },
    {
      label: "Rejected",
      count: rejectedProducts,
      color: "bg-red-100",
    },
    {
      label: "Pending",
      count: pendingProducts,
      color: "bg-blue-100",
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stats.map(stat => (
        <div
          key={stat.label}
          className={cn(stat.color, "border-1 border-gray-300 p-4 rounded-lg")}
        >
          <p>{stat.label}</p>
          <p>{stat.count}</p>
        </div>
      ))}
    </div>
  )
}
