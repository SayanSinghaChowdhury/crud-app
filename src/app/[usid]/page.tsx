import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import EditorUser from "@/components/userdata/EditorUser";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};
const page = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="grid w-sm place-items-center">
        <CardHeader className="w-full">
          <CardTitle className="text-center font-mono text-2xl font-stretch-50%">
            User Edits Zone
          </CardTitle>
        </CardHeader>

        <EditorUser editDelete={id} />
      </Card>
    </section>
  );
};

export default page;
