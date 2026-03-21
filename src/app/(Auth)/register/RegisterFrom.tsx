"use client";
import { Button } from "-/components/ui/button";
import { Field, FieldError, FieldLabel } from "-/components/ui/field";
import { Input } from "-/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { registerSchema } from "./register.schema";
import { RegisterSchemaObjectType } from "./registerSchemaObjectType";
import { RegisterAction } from "./register.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterFrom() {
  const router = useRouter();
  const { handleSubmit, control } = useForm<RegisterSchemaObjectType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  async function submit(data: RegisterSchemaObjectType) {
    console.log("dateRegister", data);
    const IsRegisterSuccessfuly = await RegisterAction(data);
    if (IsRegisterSuccessfuly) {
      toast.success("register is successfuly", {
        duration: 3000,
        position: "top-right",
      });

      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } else {
      toast.error(" Account is aleardy exist", {
        duration: 3000,
        position: "top-right",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="name">User Name</FieldLabel>
            <Input
              {...field}
              id="name"
              aria-invalid={fieldState.invalid}
              placeholder="UserName..."
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input
              {...field}
              id="phone"
              aria-invalid={fieldState.invalid}
              placeholder="Phone..."
              autoComplete="off"
              type="tel"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

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

      <Controller
        name="rePassword"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="repassword">Password Confirmation</FieldLabel>
            <Input
              {...field}
              id="repassword"
              aria-invalid={fieldState.invalid}
              placeholder="Password Confirmation..."
              autoComplete="off"
              type="password"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button>Register</Button>
    </form>
  );
}
