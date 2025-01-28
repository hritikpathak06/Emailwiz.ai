"use client";
import { getAllTemplates } from "@/action/AiResponse";
import MyTemplates from "@/components/client/Dashboard/MyTemplates";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { user } = useUser();

  const [templates, setTemplates] = useState<any>([]); 

  useEffect(() => {
    const fetchTemplates = async () => {
      const data: any = await getAllTemplates();

     console.log("Data===>> ",data[2].design);

      setTemplates(data); 
    };

    fetchTemplates();
  }, []); 

  if (!user) return <div>Loading...</div>; // Add a loading state for when the user data is not available
  if (!templates.length) return <div>Loading templates...</div>; // Add loading state for templates

  // console.log("templates==>> ", templates);

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
              <Button className="flex items-center gap-2">
                <PlusIcon className="h-4 w-4" />
                Create New
              </Button>
            </div>
            <h2 className="text-2xl font-bold">My WorkSpace</h2>
            <MyTemplates />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
