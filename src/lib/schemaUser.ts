import z from "zod";

export const userSchema = z.object({
  username: z
    .string({ error: "Name is required." })
    .min(6, { error: "Name must be at least 6 characters long." })
    .max(36, { error: "Name must not exceed 50 characters." }),

  email: z.email({ error: "Please enter a valid email address." }),

  address: z
    .string()
    .trim()
    .min(10, "Address must be at least 10 characters")
    .max(100, "Address must not exceed 200 characters"),
});

export type UserSchemaType = z.infer<typeof userSchema>;
