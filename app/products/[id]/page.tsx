import { getAllProducts } from "@/lib/db-queries"

export async function generateStaticParams() {
  const products = await getAllProducts()
  return products.map(product => ({ id: product.id.toString() }))
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  )
}
