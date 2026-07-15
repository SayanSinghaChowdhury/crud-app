"use server";

import prisma from "@/lib/database/dbClient";
import { UserSchemaType } from "@/lib/schemaUser";
import { revalidatePath } from "next/cache";

const userUpdateAction = async (id: string, newData: UserSchemaType) => {
  try {
    await prisma.userMosel.update({ where: { id }, data: newData });

    //   for main page or read page data refresh one time when new user login or create.

    revalidatePath("/");

    return {
      issuccess: true,

      message: "Update Successful 🚀",
    };
  } catch (error) {
    console.log(error);

    return {
      issuccess: false,

      message: "User Update Failed 🦖",
    };
  }
};

export default userUpdateAction;
