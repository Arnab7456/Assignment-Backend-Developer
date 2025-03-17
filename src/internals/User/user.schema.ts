import { z } from "zod";

const CreateUserSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(5),
    age: z.number().positive(),
});

export default CreateUserSchema;
