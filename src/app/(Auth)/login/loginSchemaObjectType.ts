import * as zod from "zod";
import { LoginSchema } from "./login.schema";

export type LoginSchemaObjectType = zod.infer<typeof LoginSchema>;
