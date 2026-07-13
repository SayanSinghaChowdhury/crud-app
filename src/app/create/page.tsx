import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import UserCreate from "@/components/userdata/UserCreate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALL-User Basic Create CRUD-app",
  description: "ALL-User Basic CRUD-app for user data Create",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="grid w-sm place-items-center">
        <CardHeader className="w-full">
          <CardTitle className="text-center font-mono text-2xl font-stretch-50%">
            User Create Zone
          </CardTitle>
        </CardHeader>

        <UserCreate />
      </Card>
    </section>
  );
};

export default page;
