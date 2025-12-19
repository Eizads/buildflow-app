export default function RecentlyLaunchedSkeleton() {
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="h-8 w-64 bg-muted animate-pulse rounded mb-4" />
        <div className="grid-wrapper mt-10">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-48 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  )
}
