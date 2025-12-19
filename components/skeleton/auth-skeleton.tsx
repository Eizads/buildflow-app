// Skeleton component for authentication loading state
export default function AuthSkeleton() {
  return (
    <div className="flex flex-row items-center justify-start gap-3">
      <div className="h-9 w-32 bg-muted-foreground animate-pulse rounded-md" />
      <div className="h-9 w-9 bg-muted-foreground animate-pulse rounded-full" />
    </div>
  )
}
