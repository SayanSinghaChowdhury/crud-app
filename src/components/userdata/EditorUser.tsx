"use client";

import { userSchema, UserSchemaType } from "@/lib/schemaUser";
import userUpdateAction from "@/server/userEditingAction";
import { UserMosel } from "@generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
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

type UserDataType = {
  editDelete: UserMosel;
};

const EditorUser = ({ editDelete: { id } }: UserDataType) => {
  const {
    handleSubmit,
    control,

    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: { username: "", email: "", address: "" },

    mode: "all",
  });

  const { push } = useRouter();

  const userEditHandelar = async (newData: UserSchemaType) => {
    const { issuccess, message } = await userUpdateAction(id, newData);

    if (issuccess) {
      toast.success(message);

      push("/");
    } else {
      toast.error(message);
    }

    await new Promise((r) => {
      setTimeout(r, 1000);
    });
  };

  return (
    <form
      className="w-full space-y-7"
      onSubmit={handleSubmit(userEditHandelar)}
      noValidate>
      <CardContent className="grid w-sm place-items-center gap-7">
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>User Name</FieldLabel>
              <Input
                className="bg-project text-project"
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
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>User Email</FieldLabel>
              <Input
                {...field}
                className="bg-project text-project"
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
                className="bg-project text-project pb-20"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                autoComplete="address-level2"
                placeholder="Enter your Adress "></Textarea>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}

              <FieldDescription className="text-center">
                Update your Data
              </FieldDescription>
            </Field>
          )}
        />
      </CardContent>

      <CardFooter className="grid place-items-center gap-3">
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

export default EditorUser;
