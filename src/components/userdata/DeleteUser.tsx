import { BrushCleaningIcon, Trash2Icon } from "lucide-react";
import { setTimeout } from "node:timers";
import { useState } from "react";
import { Button } from "../shadcnui/button";

const DeleteUser = () => {
  const [remove, setRemove] = useState(false);

  const HandleClear = async () => {
    setRemove(true);
    await new Promise((r) => {
      setTimeout(r, 500);
    });

    console.log("🥚");
    setRemove(false);
  };

  return (
    <Button
      onClick={HandleClear}
      disabled={remove}
      className="w-full"
      variant={"destructive"}>
      {remove ?
        <>
          Deleting
          <BrushCleaningIcon />
        </>
      : <>
          Delete
          <Trash2Icon />
        </>
      }
    </Button>
  );
};

export default DeleteUser;
