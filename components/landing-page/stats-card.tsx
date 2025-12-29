import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
export default function StatsCard({
  icon: Icon,
  title,
  value,
  hasBorder,
}: {
  icon: LucideIcon
  title: string
  value: string
  hasBorder?: boolean
}) {
  return (
    <div>
      <div
        className={cn(
          "flex flex-row items-center justify-center py-4 gap-2",
          hasBorder && "border-x-1 border-sky-300 px-4"
        )}
      >
        <Icon className="w-4 h-4 text-sky-500" />
        <span className="md:text-2xl text-sm font-bold">{value}</span>
      </div>
      <div className="text-sm text-muted-foreground">{title}</div>
    </div>
  )
}
