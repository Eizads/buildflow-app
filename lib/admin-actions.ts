"use server"

import { db } from "@/db"
import { products } from "@/db/schema"
import { ProductType } from "@/lib/types"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function approveProductAction(productId: ProductType["id"]) {
  await db
    .update(products)
    .set({ status: "approved" })
    .where(eq(products.id, productId))
  console.log("approving product", productId)
  revalidatePath("/admin")
}

export async function rejectProductAction(productId: ProductType["id"]) {
  await db
    .update(products)
    .set({ status: "rejected" })
    .where(eq(products.id, productId))
  console.log("rejecting product", productId)
  revalidatePath("/admin")
}

export async function deleteProductAction(productId: ProductType["id"]) {
  try {
    await db.delete(products).where(eq(products.id, productId))
    console.log("deleting product", productId)
    revalidatePath("/admin")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete product", error)
    return { success: false }
  }
}
