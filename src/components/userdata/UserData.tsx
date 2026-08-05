"use client";

import { UserMosel } from "@generated/prisma/client";
import { Edit2Icon, HouseIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";
import DeleteUser from "./DeleteUser";

type UserDataType = {
  createData: UserMosel;
};

const UserData = ({
  createData: { id, username, email, address },
}: UserDataType) => {
  return (
    <Card className="grid w-sm place-items-center gap-5 hover:scale-102 hover:shadow-2xl hover:shadow-gray-400/10 hover:delay-75">
      <CardHeader className="grid w-full place-items-center">
        <CardTitle className="text-muted-foreground w-full border-b-4 pb-3 text-center text-xl font-semibold wrap-break-word">
          {username}
        </CardTitle>

        <CardDescription className="w-xs rounded-lg px-7 py-7 text-center font-mono wrap-break-word font-stretch-50%">
          {email}
        </CardDescription>
      </CardHeader>

      <CardContent className="grid w-full place-items-center gap-3.5 pb-3">
        <h1 className="flex place-items-center gap-1.5 text-lg">
          Adress:
          <HouseIcon />
        </h1>
        <p className="w-2xs rounded-lg bg-gray-400/10 px-7 py-7 text-center font-mono wrap-break-word font-stretch-50%">
          {address}
        </p>
      </CardContent>

      <CardFooter className="grid w-full grid-cols-2 gap-2">
        <DeleteUser usDelete={id} />

        <Link
          href={`/${id}`}
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "w-full",
          })}>
          Edit <Edit2Icon />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserData;
