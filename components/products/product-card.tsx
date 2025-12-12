import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { StarIcon } from "lucide-react"

type Product = {
  name: string
  description: string
  tags: string[]
  isFeatured: boolean
  votes: number
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <div className="flex flex-row items-center justify-between ">
          <CardTitle>{product.name}</CardTitle>
          {product.isFeatured && (
            <Badge className="bg-sky-500 text-white" variant="outline">
              <StarIcon className="w-4 h-4 fill-current" /> Featured
            </Badge>
          )}
        </div>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardFooter className="flex flex-row items-center justify-start gap-2 flex-wrap px-0">
          {product.tags.map(tag => (
            <Badge
              key={tag}
              className="bg-green-500 text-white text-sm"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default ProductCard
