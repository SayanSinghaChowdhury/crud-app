import UserData from "@/components/userdata/UserData";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALL-User Basic CRUD-app",
  description: "ALL-User Basic CRUD-app for user data",
};

const page = async () => {
  const userAll = await prisma.userMosel.findMany();

  if (userAll.length === 0) {
    return (
      <section className="grid h-dvh place-items-center">
        <h1>No student</h1>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 place-items-center gap-10 pt-24 pb-14 md:grid-cols-2 lg:grid-cols-3">
      {userAll.map((cdata) => (
        <UserData
          key={cdata.id}
          createData={cdata}
        />
      ))}
    </section>
  );
};

export default page;
