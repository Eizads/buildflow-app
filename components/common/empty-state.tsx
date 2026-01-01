import { LucideIcon } from "lucide-react"

function EmptyState({
  icon: Icon,
  message,
}: {
  icon: LucideIcon
  message: string
}) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 border-1 border-gray-300 rounded-sm p-5 
    "
    >
      <Icon className="w-6 h-6 text-gray-500" />
      <p className="text-muted-foreground text-center">{message}</p>
    </div>
  )
}

export default EmptyState
