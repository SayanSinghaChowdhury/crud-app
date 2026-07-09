"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";

const userDeleteAction = async (usDelete: string) => {
  try {
    await prisma.userMosel.delete({
      where: {
        id: usDelete,
      },
    });

    revalidatePath("/");

    return {
      issuccess: true,

      message: "Delete Successful 🧹",
    };
  } catch (error) {
    return {
      issuccess: false,

      message: "User created Failed 🦖",
    };
  }
};

export default userDeleteAction;
