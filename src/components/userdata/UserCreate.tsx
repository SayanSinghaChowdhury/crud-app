"use client";

import { userSchema, UserSchemaType } from "@/lib/schemaUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { BrushCleaningIcon, Send, Trash2Icon, UploadCloud } from "lucide-react";
import { setTimeout } from "node:timers";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { CardContent, CardFooter } from "../shadcnui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import { Textarea } from "../shadcnui/textarea";

const UserCreate = () => {
  const [clear, setClear] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: { username: "", gmail: "", address: "" },

    mode: "all",
  });

  const userCreateHandelar = async (usData: UserSchemaType) => {
    await new Promise((r) => {
      setTimeout(r, 1000);
    });
    console.log(usData);
  };

  const HandleClear = async () => {
    setClear(true);
    await new Promise((r) => {
      setTimeout(r, 500);
    });
    setClear(false);

    reset();
  };

  return (
    <form
      className="w-full space-y-7"
      onSubmit={handleSubmit(userCreateHandelar)}
      noValidate>
      <CardContent className="grid w-sm place-items-center gap-7">
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>User Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="text"
                placeholder="Enter your Name"
                autoComplete="name"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="gmail"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>User Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="Enter your Email"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>User Adress</FieldLabel>

              <Textarea
                className="pb-20"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                autoComplete="address-level2"
                placeholder="Enter your Adress "></Textarea>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}

              <FieldDescription className="text-center">
                Fill Properly
              </FieldDescription>
            </Field>
          )}
        />
      </CardContent>

      <CardFooter className="grid grid-cols-2 place-items-center gap-3">
        <Button
          type="reset"
          onClick={HandleClear}
          className="w-full"
          variant={"destructive"}>
          {clear ?
            <>
              Reseting...
              <BrushCleaningIcon />
            </>
          : <>
              Reset
              <Trash2Icon />
            </>
          }
        </Button>

        <Button
          type="submit"
          className="w-full"
          variant={"secondary"}
          disabled={isSubmitting}>
          {isSubmitting ?
            <>
              Submiting <UploadCloud />
            </>
          : <>
              Submit <Send />
            </>
          }
        </Button>
      </CardFooter>
    </form>
  );
};

export default UserCreate;
