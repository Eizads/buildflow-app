import { Skeleton } from "../ui/skeleton"
import SectionHeader from "../common/section-header"
import { ShieldIcon } from "lucide-react"

export default function AdminPageSkeleton() {
  return (
    <section className="bg-slate-100 flex-1 flex flex-col">
      <div className="container py-10 space-y-8">
        {/* Section Header Skeleton */}
        <div className="space-y-2">
          <SectionHeader
            icon={ShieldIcon}
            title="Product Admin"
            description="Review and manage submitted products"
            headingLevel="h1"
          />
          {/* <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded" />
            <Skeleton className="h-8 w-48" />
          </div>
          <Skeleton className="h-5 w-96" /> */}
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-lg space-y-2"
            >
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-8 w-12" />
            </div>
          ))}
        </div>

        {/* Pending Approval Section Skeleton */}
        <h2 className="text-2xl font-bold">Pending Approval (0)</h2>
        <div className="space-y-4">
          {/* <Skeleton className="h-8 w-64" /> */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 space-y-4 min-h-[300px]"
              >
                <div className="flex items-start justify-between gap-2">
                  <Skeleton className="h-6 flex-1" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-8 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Products Section Skeleton */}
        <h2 className="text-2xl font-bold">All Products</h2>
        <div className="space-y-4">
          {/* <Skeleton className="h-8 w-48" /> */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 space-y-4 min-h-[300px]"
              >
                <div className="flex items-start justify-between gap-2">
                  <Skeleton className="h-6 flex-1" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-8 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
