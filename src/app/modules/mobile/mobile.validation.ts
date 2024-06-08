import { z } from 'zod';

const VariantValidationSchema = z.object({
  type: z.string({ required_error: "Variant type is required." }),
  value: z.string({ required_error: "Variant value is required." }),
});

const InventoryValidationSchema = z.object({
  quantity: z.number({ required_error: "Quantity is required." }).int({ message: "Quantity must be an integer." }).min(0, { message: "Quantity cannot be negative." }),
  inStock: z.boolean({ required_error: "In stock status is required." }),
});

export const MobileValidationSchema = z.object({
  name: z.string({ required_error: "Mobile name is required." }),
  description: z.string({ required_error: "Description is required." }),
  price: z.number({ required_error: "Price is required." }).nonnegative({ message: "Price must be a non-negative number." }),
  tags: z.array(z.string(), { message: "Tags must be an array of strings." }),
  variants: z.array(VariantValidationSchema, { message: "Variants must be an array of Variant objects." }),
  inventory: InventoryValidationSchema,
});

