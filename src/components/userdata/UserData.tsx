"use client";

import Link from "next/link";
import { buttonVariants } from "../shadcnui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";
import DeleteUser from "./DeleteUser";

const UserData = () => {
  const usid = "used";

  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          BEN10
        </CardTitle>

        <CardDescription className="mt-5 text-center text-lg">
          kevenelevenbentenisen@gmail.com
        </CardDescription>
      </CardHeader>

      <CardFooter className="grid grid-cols-2 place-items-center gap-2">
        <DeleteUser />

        <Link
          href={`/${usid}`}
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
