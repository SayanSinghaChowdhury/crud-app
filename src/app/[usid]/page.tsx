import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import EditorUser from "@/components/userdata/EditorUser";

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="grid w-sm place-items-center">
        <CardHeader className="w-full">
          <CardTitle className="text-center font-mono text-2xl font-stretch-50%">
            User Edits Zone
          </CardTitle>
        </CardHeader>

        <EditorUser />
      </Card>
    </section>
  );
};

export default page;
