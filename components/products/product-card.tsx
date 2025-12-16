"use client"
import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import { StarIcon, ChevronUpIcon, ChevronDownIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

type Product = {
  id: number
  name: string
  description: string
  tags: string[]
  isFeatured: boolean
  votes: number
}

function ProductCard({ product }: { product: Product }) {
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = (e: React.MouseEvent, direction: "up" | "down") => {
    e.stopPropagation()
    e.preventDefault()
    setHasVoted(true)
    // Handle vote logic here
    console.log(`Vote ${direction} for product ${product.id}`)
  }

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="flex flex-col justify-between card-hover group hover:shadow-lg hover:scale-105 transition-all duration-300 min-h-[160px]">
        <CardHeader className="flex-1">
          <div className="flex flex-row items-start justify-between">
            <div>
              <div className="flex flex-row items-center justify-between gap-2">
                <CardTitle className="text-lg font-bold group-hover:text-sky-700 transition-all duration-300">
                  {product.name}
                </CardTitle>
                {product.isFeatured && (
                  <Badge className="bg-sky-500 text-white" variant="default">
                    <StarIcon className="w-4 h-4 fill-current" /> Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>
            {/* Voting Section */}
            <div
              className="flex flex-col items-center justify-start gap-1 shrink-0"
              onClick={e => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className={hasVoted ? "text-sky-500" : "text-foreground/25"}
                onClick={e => handleVote(e, "up")}
              >
                <ChevronUpIcon className="w-4 h-4 " />
              </Button>
              <span className="text-sm font-semibold transition-colors">
                {product.votes}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className={hasVoted ? "text-sky-500" : "text-foreground/25"}
                onClick={e => handleVote(e, "down")}
              >
                <ChevronDownIcon className="w-4 h-4 " />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardFooter className="px-0 gap-2 flex-wrap">
            {product.tags.map(tag => (
              <Badge key={tag} className="text-sm" variant="secondary">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProductCard
