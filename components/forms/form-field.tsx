import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  name: string
  placeholder: string
  required?: boolean
  id: string
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  error: string | undefined
  helperText: string | undefined
  textarea?: boolean
  defaultValue?: string
}
export default function FormField({
  label,
  name,
  placeholder,
  required,
  id,
  onChange,
  error,
  helperText,
  textarea,
  defaultValue,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {textarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={cn("w-full", error && "border-destructive")}
          onChange={e => onChange(e as React.ChangeEvent<HTMLTextAreaElement>)}
        />
      ) : (
        <Input
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={cn("w-full", error && "border-destructive")}
          onChange={e => onChange(e as React.ChangeEvent<HTMLInputElement>)}
        />
      )}

      {helperText && (
        <p className="text-muted-foreground text-sm">{helperText}</p>
      )}
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  )
}
