"use client"

import { Button } from "../ui/button"
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react"
import { useState, startTransition, useOptimistic } from "react"
import {
  upvoteProductAction,
  downvoteProductAction,
} from "@/lib/product-actions"
import { InferSelectModel } from "drizzle-orm"
import { products } from "@/db/schema"

type Product = InferSelectModel<typeof products>

export default function ProductVoting({ product }: { product: Product }) {
  const [hasVoted, setHasVoted] = useState(false)

  const [optimisticVoteCount, setOptimisticVoteCount] = useOptimistic(
    product.voteCount,
    (state, action: "up" | "down") => {
      if (action === "up") {
        return state + 1
      } else {
        if (state > 0) {
          return state - 1
        } else {
          return state
        }
      }
    }
  )

  const handleVote = async (e: React.MouseEvent, direction: "up" | "down") => {
    e.stopPropagation()
    e.preventDefault()
    setHasVoted(true)

    if (direction === "up") {
      startTransition(() => {
        setOptimisticVoteCount("up")
      })
      const result = await upvoteProductAction(product.id)
      if (result.success) {
        console.log(result, "upvote result")
        // Don't manually update voteCount - revalidatePath will refresh the data
        // The optimistic value will sync when the component re-renders with new data
      } else {
        console.log(result, "upvote failed")
        startTransition(() => {
          setOptimisticVoteCount("down") // Revert optimistic update
        })
      }
    } else {
      startTransition(() => {
        setOptimisticVoteCount("down")
      })
      const result = await downvoteProductAction(product.id)
      if (result.success) {
        console.log(result, "downvote result")
        // Don't manually update voteCount - revalidatePath will refresh the data
        // The optimistic value will sync when the component re-renders with new data
      } else {
        console.log(result, "downvote failed")
        startTransition(() => {
          setOptimisticVoteCount("up") // Revert optimistic update
        })
      }
    }
    // Handle vote logic here
    console.log(`Vote ${direction} for product ${product.slug}`)
  }
  return (
    <div
      className="flex flex-col items-center justify-start gap-1 shrink-0"
      onClick={e => e.stopPropagation()}
    >
      <Button
        variant="ghost"
        size="icon"
        className={hasVoted ? "text-sky-500" : "text-foreground/25 "}
        onClick={e => handleVote(e, "up")}
      >
        <ChevronUpIcon className="w-4 h-4 " />
      </Button>
      <span className="text-sm font-semibold transition-colors">
        {optimisticVoteCount}
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
  )
}
