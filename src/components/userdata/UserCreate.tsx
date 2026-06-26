"use client";

import { Button } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";

const UserCreate = () => {
  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold"></CardTitle>
      </CardHeader>

      <CardContent className="grid place-items-center gap-7">
        <form>hi</form>
      </CardContent>

      <CardFooter className="grid grid-cols-2 place-items-center gap-2">
        <Button
          className="w-full"
          variant={"destructive"}>
          Delet
        </Button>

        <Button
          className="w-full"
          variant={"secondary"}>
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCreate;
