"use server";

import prisma from "@/lib/database/dbClient";
import { UserSchemaType } from "@/lib/schemaUser";
import { revalidatePath } from "next/cache";

const userCreateAction = async (usData: UserSchemaType) => {
  try {
    await prisma.userMosel.create({
      data: usData,
    });

    //   for main page or read page data refresh one time when new user login or create.

    revalidatePath("/");

    return {
      issuccess: true,

      message: "Login Successful 🚀",
    };
  } catch (error) {
    console.log(error);

    return {
      issuccess: false,

      message: "User created Failed 🦖",
    };
  }
};

export default userCreateAction;
