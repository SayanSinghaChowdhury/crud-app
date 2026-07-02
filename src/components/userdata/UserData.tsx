"use client";

import { Button } from "../shadcnui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";
import DeleteUser from "./DeleteUser";

const UserData = () => {
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

        <Button
          className="w-full"
          variant={"secondary"}>
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserData;
