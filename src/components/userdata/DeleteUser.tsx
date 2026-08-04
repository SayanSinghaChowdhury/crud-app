import userDeleteAction from "@/server/userDeleteAction";
import { BrushCleaningIcon, Trash2Icon } from "lucide-react";
import { setTimeout } from "node:timers";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

type userDeleteProcess = {
  usDelete: string;
};

const DeleteUser = ({ usDelete }: userDeleteProcess) => {
  const [remove, setRemove] = useState(false);

  const HandleClear = async () => {
    // server to client

    const { issuccess, message } = await userDeleteAction(usDelete);
    setRemove(true);

    if (issuccess) {
      toast.success(message);
    } else {
      toast.error(message);
    }

    await new Promise((r) => {
      setTimeout(r, 500);
    });

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
