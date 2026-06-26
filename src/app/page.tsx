import UserData from "@/components/userdata/UserData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALL-User Basic CRUD-app",
  description: "ALL-User Basic CRUD-app for user data",
};

const page = () => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-10 pt-24 pb-14 md:grid-cols-2 lg:grid-cols-3">
      <UserData />
      <UserData />
      <UserData />
      <UserData />
      <UserData />
      <UserData />
    </section>
  );
};

export default page;
