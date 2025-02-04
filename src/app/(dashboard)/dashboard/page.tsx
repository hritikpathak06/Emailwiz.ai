"use client";
import { getAllTemplates } from "@/action/AiResponse";
import MyTemplates from "@/components/client/Dashboard/MyTemplates";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { user } = useUser();
  const router = useRouter();

  const [templates, setTemplates] = useState<any>([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const data: any = await getAllTemplates();

      setTemplates(data);
    };

    fetchTemplates();
  }, []);

  if (!user) return <div>Loading...</div>;
  if (!templates.length) return <div>Loading templates...</div>;

  return (
    <>
      <div className="">
        <div>
          <div className="px-10 md:px-20 lg:px-40 xl:px-56 mt-20 flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-extrabold">
                Hello{" "}
                <span className="text-blue-500">
                  {user?.firstName} {user?.lastName}
                </span>
              </h2>
              <Button
                className="flex items-center gap-2"
                onClick={() => router.push("/create")}
              >
                <PlusIcon className="h-4 w-4" />
                Create New
              </Button>
            </div>
            <h2 className="text-2xl font-bold">My WorkSpace</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            <MyTemplates templates={templates} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
