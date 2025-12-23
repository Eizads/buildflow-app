"use client"
import FormField from "../forms/form-field"
import { Button } from "../ui/button"
import { Loader2Icon, SparklesIcon } from "lucide-react"
import { addProductAction } from "@/lib/product-actions"
import { useActionState } from "react"
import { cn } from "@/lib/utils"

const initialState: {
  success: boolean
  errors?: Record<string, string[]>
  message: string | null
  values?: {
    name?: string
    slug?: string
    tagline?: string
    description?: string
    websiteUrl?: string
    tags?: string
  }
} = {
  success: false,
  errors: {},
  message: null,
  values: undefined,
}
export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState
  )
  const { errors, message, success, values } = state

  return (
    <form className="space-y-6" action={formAction} noValidate>
      {message && (
        <div
          aria-live="polite"
          role="alert"
          className={cn(
            "bg-green-100 border px-4 py-3 rounded relative",
            success
              ? "bg-green-100 border-green-400 text-green-700"
              : "bg-red-100 border-red-400 text-red-700"
          )}
        >
          <span className="block sm:inline">{message}</span>
        </div>
      )}
      <FormField
        id="name"
        name="name"
        label="Name*"
        placeholder="Enter the name of the product"
        required
        onChange={() => {}}
        error={errors?.name?.[0] || ""}
        helperText={undefined}
        defaultValue={values?.name}
      />
      <FormField
        id="slug"
        name="slug"
        label="Slug*"
        placeholder="Enter the slug of the product"
        required
        onChange={() => {}}
        error={errors?.slug?.[0] || ""}
        helperText="The slug is the URL-friendly version of the product name."
        defaultValue={values?.slug}
      />
      <FormField
        id="tagline"
        name="tagline"
        label="Tagline*"
        placeholder="A short, catchy tagline for your product"
        required
        onChange={() => {}}
        error={errors?.tagline?.[0] || ""}
        helperText={undefined}
        defaultValue={values?.tagline}
      />
      <FormField
        id="description"
        name="description"
        label="Description"
        placeholder="Tell us about your product"
        onChange={() => {}}
        error={errors?.description?.[0] || ""}
        helperText={undefined}
        textarea={true}
        defaultValue={values?.description}
      />
      <FormField
        id="websiteUrl"
        name="websiteUrl"
        label="Website URL"
        placeholder="https://example.com"
        onChange={() => {}}
        error={errors?.websiteUrl?.[0] || ""}
        helperText="The website URL is the URL of the product's website."
        defaultValue={values?.websiteUrl}
      />
      <FormField
        id="tags"
        name="tags"
        label="Tags*"
        placeholder="AI, Productivity, SaaS"
        required
        onChange={() => {}}
        error={errors?.tags?.[0] || ""}
        helperText="The tags are the keywords that describe your product."
        defaultValue={values?.tags}
      />
      {isPending ? (
        <Button type="submit" className="w-full" disabled>
          <Loader2Icon className="w-4 h-4 animate-spin" /> Submitting...
        </Button>
      ) : (
        <Button type="submit" className="w-full">
          <SparklesIcon className="w-4 h-4" /> Submit Product
        </Button>
      )}
    </form>
  )
}
