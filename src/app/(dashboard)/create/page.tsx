import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AiInputBox from "@/components/client/custom/AiInputBox";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();

  const serializedUser = user
    ? {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress || null,
      }
    : null;

  return (
    <>
      <div className=" px-10 md:px-28 lg:px-40 xl:px-56 mt-20">
        <div className="">
          <h2
            className=" text-4xl
             font-bold  uppercase"
          >
            Create New Template
          </h2>
          <p className=" text-gray-500 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            adipisci nihil totam enim repellat, qui ab debitis labore distinctio
            illum ex officiis. Tempore, pariatur. Ipsa magni quae repellendus
            dolore itaque!
          </p>

          <div className=" mt-10 ">
            <Tabs defaultValue="AI" className="w-[500px]">
              <TabsList>
                <TabsTrigger value="AI">Create with AI ⚡</TabsTrigger>
                <TabsTrigger value="Scratch">From Scratch</TabsTrigger>
              </TabsList>
              <TabsContent value="AI">
                <AiInputBox user={serializedUser as any} />
              </TabsContent>
              <TabsContent value="Scratch">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
