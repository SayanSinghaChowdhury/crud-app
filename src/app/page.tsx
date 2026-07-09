import UserData from "@/components/userdata/UserData";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ALL-User Basic CRUD-app",
  description: "ALL-User Basic CRUD-app for user data",
};

const page = async () => {
  const userAll = await prisma.userMosel.findMany();

  if (userAll.length === 0) {
    return (
      <Link
        href={"/create"}
        className={`animate-drop-down grid h-dvh place-items-center delay-200`}>
        <h1 className="animate-bounce font-sans text-2xl delay-300">
          No users avalable
          <span className="hover:text-5xl hover:duration-500">😭</span>
        </h1>
      </Link>
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
