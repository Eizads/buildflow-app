"use cache"
import { StarIcon } from "lucide-react"
import SectionHeader from "../common/section-header"
import { Button } from "../ui/button"
import Link from "next/link"
import ProductCard from "../products/product-card"
import { getAllProducts } from "@/lib/db-queries"

// const featuredProducts = [
//   {
//     id: 1,
//     name: "Product 1",
//     description: "Product 1 description",
//     tags: ["tag1", "tag2", "tag3"],
//     votes: 100,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     description: "Product 2 description",
//     tags: ["tag1", "tag2", "tag3"],
//     votes: 22,
//     isFeatured: true,
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     description: "Product 3 description",
//     tags: ["tag1", "tag2", "tag3"],
//     votes: 10,
//     isFeatured: false,
//   },
// ]

export default async function FeaturedProducts() {
  const featuredProducts = await getAllProducts()
  return (
    <section className="bg-slate-100 py-10">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <SectionHeader
            icon={StarIcon}
            title="Featured Products"
            description="Top picks from the community"
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>

        <div className="grid-wrapper mt-10">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
