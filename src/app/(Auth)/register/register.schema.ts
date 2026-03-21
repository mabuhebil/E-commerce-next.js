import * as zod from "zod";

export const registerSchema = zod
  .object({
    name: zod
      .string("Name must be text")
      .nonempty("name is required")
      .min(3, " name must be at least 3 char")
      .max(13, " name must be maxuim 13 char"),
    email: zod.email("email is not in format").nonempty("email is requierd"),

    phone: zod
      .string()
      .nonempty()
      .regex(/01[0125][0-9]{8}/, "phone must be an Egyption number"),

    password: zod
      .string()
      .nonempty()
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number:",
      ),
    rePassword: zod
      .string()
      .nonempty()
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number:",
      ),
  })
  .refine(
    (value) => {
      return value.password === value.rePassword;
    },
    { error: "Password is not matched", path: ["password"] },
  );
