import * as zod from "zod";
import { registerSchema } from "./register.schema";

export type RegisterSchemaObjectType = zod.infer<typeof registerSchema>;
