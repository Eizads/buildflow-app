import { RocketIcon, CalendarIcon } from "lucide-react"
import SectionHeader from "../common/section-header"
import ProductCard from "../products/product-card"
import EmptyState from "../common/empty-state"
import { getRecentlyLaunchedProducts } from "@/lib/db-queries"

export default async function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts()
  return (
    <section className="bg-white py-10">
      <div className="container space-y-8">
        <SectionHeader
          icon={RocketIcon}
          title="Recently Launched"
          description="Discover the latest products from our community"
        />
        {recentlyLaunchedProducts.length === 0 ? (
          <EmptyState
            icon={CalendarIcon}
            message="No products have been launched recently. Check back later!"
          />
        ) : (
          <div className="grid-wrapper mt-10">
            {recentlyLaunchedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
