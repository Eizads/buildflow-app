// Skeleton component for authentication loading state
import { Skeleton } from "../ui/skeleton"

export default function AuthSkeleton() {
  return (
    <div className="container ">
      <div className="flex flex-row items-center justify-end gap-3 ">
        <Skeleton className="h-9 w-21 rounded-md bg-gray-300" />
        <Skeleton className="h-9 w-21 rounded-md bg-gray-300" />
      </div>
    </div>
  )
}
