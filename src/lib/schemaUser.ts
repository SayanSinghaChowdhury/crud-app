import z from "zod";

export const userSchema = z.object({
  username: z
    .string({ error: "Name is required." })
    .min(6, { error: "Name must be at least 6 characters long." })
    .max(36, { error: "Name must not exceed 50 characters." }),
  email: z.email({ error: "Please enter a valid email address." }),

  address: z
    .string({ error: "Address is required" })
    .min(10, { error: "Address must be at least 12 characters long." })
    .max(100, { error: "Address must be at least 20 characters long." }),
});

export type UserSchemaType = z.infer<typeof userSchema>;
