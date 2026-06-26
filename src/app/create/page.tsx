import UserCreate from "@/components/userdata/UserCreate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALL-User Basic Create CRUD-app",
  description: "ALL-User Basic CRUD-app for user data Create",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <UserCreate />
    </section>
  );
};

export default page;
