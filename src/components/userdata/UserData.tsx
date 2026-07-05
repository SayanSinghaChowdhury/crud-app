"use client";

import { UserMosel } from "@generated/prisma/client";
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
    <Card className="grid w-sm place-items-center gap-7">
      <CardHeader className="w-full">
        <CardTitle className="text-center text-xl font-semibold">
          {username}
        </CardTitle>

        <CardDescription className="w-full text-center text-lg">
          {email}
        </CardDescription>
      </CardHeader>

      <CardContent className="">{address}</CardContent>

      <CardFooter className="grid grid-cols-2 place-items-center gap-2">
        {/* pass the data through props the unique id for the catch th user data for delet */}
        <DeleteUser usDelete={id} />

        <Link
          href={`/${id}`}
          className={buttonVariants({ variant: "secondary", size: "lg" })}>
          Edit 📝
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserData;

// <Link
//   className="w-full"
//   variant={"secondary"}>
//   Edit
// </Link>;
