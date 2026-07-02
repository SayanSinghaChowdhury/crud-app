import { useState } from "react";
import { Button } from "../shadcnui/button";

const DeleteUser = () => {
  const [delet, setDelet] = useState(false);

  return (
    <Button
      className="w-full"
      variant={"destructive"}>
      Delet
    </Button>
  );
};

export default DeleteUser;
