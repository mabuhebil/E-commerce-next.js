"use client";
import { Button } from "-/components/ui/button";
import { Field, FieldError, FieldLabel } from "-/components/ui/field";
import { Input } from "-/components/ui/input";
import { Controller, useForm } from "react-hook-form";

export default function RegisterFrom() {
  const { handleSubmit, control } = useForm();

  function submit(data) {
    console.log("dateRegister", data);
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
        name="repassword"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="repassword">
                Password Confirmation
            </FieldLabel>
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
