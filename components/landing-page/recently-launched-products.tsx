import { RocketIcon, CalendarIcon } from "lucide-react"
import SectionHeader from "../common/section-header"
import ProductCard from "../products/product-card"
import EmptyState from "../common/empty-state"

type Product = {
  id: number
  name: string
  description: string
  tags: string[]
  isFeatured: boolean
  votes: number
}

export default function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts: Product[] = []
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
