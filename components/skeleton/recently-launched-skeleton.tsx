import { Skeleton } from "../ui/skeleton"
export default function RecentlyLaunchedSkeleton() {
  return (
    <section className="bg-white py-10">
      <div className="container space-y-8">
        <Skeleton className="size-6 w-78 h-8" />
        <Skeleton className="w-64 h-8" />

        <div className="grid-wrapper mt-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="border rounded-md p-4 ">
              <Skeleton className="size-6 h-48 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
