"use client";
import { Button } from "-/components/ui/button";
import { Field, FieldError, FieldLabel } from "-/components/ui/field";
import { Input } from "-/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema } from "./login.schema";
import { LoginSchemaObjectType } from "./loginSchemaObjectType";
import { LoginAction } from "./login.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterFrom() {
  const router = useRouter();
  const { handleSubmit, control } = useForm<LoginSchemaObjectType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function submit(data: LoginSchemaObjectType) {
    const IsLoginSuccessfuly = await LoginAction(data);
    if (IsLoginSuccessfuly) {
      toast.success("Login is successfuly", {
        duration: 3000,
        position: "top-right",
      });

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } else {
      toast.error(" Password or Email  wrong", {
        duration: 3000,
        position: "top-right",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              {...field}
              id="email"
              aria-invalid={fieldState.invalid}
              placeholder="Email..."
              autoComplete="off"
              type="email"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="password"> Password</FieldLabel>
            <Input
              {...field}
              id="password"
              aria-invalid={fieldState.invalid}
              placeholder="Userpassword..."
              autoComplete="off"
              type="password"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button>Login</Button>
    </form>
  );
}
