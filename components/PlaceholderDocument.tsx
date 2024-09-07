"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { FrownIcon, PlusCircleIcon } from "lucide-react";
import useSubscription from "@/hooks/useSubscription";

function PlaceholderDocument() {
  const { isOverFileLimit } = useSubscription();
  const router = useRouter();

  const handleClick = () => {
    if (isOverFileLimit) {
      router.push("/dashboard/upgrade");
    } else {
      router.push("/dashboard/upload");
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400"
    >
      {isOverFileLimit ? (
        <div className="flex flex-col justify-center items-center">
          <FrownIcon className="h-16 w-16" />
          <p>
            <span className="text-red-400">Upgrade</span> to add more documents
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <PlusCircleIcon className="h-16 w-16" />
          <p>Add a document</p>
        </div>
      )}
    </Button>
  );
}

export default PlaceholderDocument;
