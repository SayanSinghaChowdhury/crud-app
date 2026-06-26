import z from "zod";

const userSchema = z.object({
  username: z.string(),
  gmail: z.email(),
});

type UserSchemaType = z.infer<typeof userSchema>;
