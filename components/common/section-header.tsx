import { LucideIcon } from "lucide-react"
function SectionHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div>
      <div className="flex flex-row items-center justify-start gap-2 mb-2">
        <Icon className="w-4 h-4 text-sky-500" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default SectionHeader
