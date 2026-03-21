import * as zod from "zod";

export const LoginSchema = zod.object({
  email: zod.email("email is not in format").nonempty("email is requierd"),

  password: zod
    .string()
    .nonempty()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum eight characters, at least one letter and one number:",
    ),
});
