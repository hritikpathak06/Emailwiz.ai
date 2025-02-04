"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MyTemplates = () => {
  const [myTemplatesList, setMyTemplatesList] = useState([]);
  const router = useRouter();
  return (
    <>
      <div>
        {myTemplatesList.length === 0 ? (
          <>
            <div className=" flex items-center justify-center gap-3 flex-col">
              <Image
                src={"/no-data.png"}
                height={400}
                width={400}
                alt="no-data"
              />
              <Button
                className="flex items-center gap-2"
                onClick={() => router.push("/create")}
              >
                <PlusIcon className="h-4 w-4" />
                Create New
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <h1>Data is present</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MyTemplates;
