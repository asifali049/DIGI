"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext =
  React.createContext<FormFieldContextValue | null>(null);

const FormItemContext =
  React.createContext<{ id: string } | null>(null);

export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>
) {
  return (
    <FormFieldContext.Provider
      value={{ name: props.name }}
    >
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

export function FormItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        className={cn("space-y-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

export function useFormField() {
  const fieldContext =
    React.useContext(FormFieldContext);

  const itemContext =
    React.useContext(FormItemContext);

  if (!fieldContext) {
    throw new Error(
      "useFormField must be used inside <FormField>."
    );
  }

  if (!itemContext) {
    throw new Error(
      "useFormField must be used inside <FormItem>."
    );
  }

  const { getFieldState } = useFormContext();

  const formState = useFormState({
    name: fieldContext.name,
  });

  const fieldState = getFieldState(
    fieldContext.name,
    formState
  );

  const { id } = itemContext;

  return {
    id,

    name: fieldContext.name,

    formItemId: `${id}-form-item`,

    formDescriptionId: `${id}-form-item-description`,

    formMessageId: `${id}-form-item-message`,

    ...fieldState,
  };
}

export function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } =
    useFormField();

  return (
    <Label
      htmlFor={formItemId}
      className={cn(
        error && "text-destructive",
        className
      )}
      {...props}
    />
  );
}

export function FormControl(
  props: React.ComponentProps<typeof Slot>
) {
  const {
    error,
    formItemId,
    formDescriptionId,
    formMessageId,
  } = useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        error
          ? `${formDescriptionId} ${formMessageId}`
          : formDescriptionId
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

export function FormDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  const { formDescriptionId } =
    useFormField();

  return (
    <p
      id={formDescriptionId}
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function FormMessage({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  const { error, formMessageId } =
    useFormField();

  const body =
    error?.message != null
      ? String(error.message)
      : children;

  if (!body) return null;

  return (
    <p
      id={formMessageId}
      className={cn(
        "text-sm font-medium text-destructive",
        className
      )}
      {...props}
    >
      {body}
    </p>
  );
}