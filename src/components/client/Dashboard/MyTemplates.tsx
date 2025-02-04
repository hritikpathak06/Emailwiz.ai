"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MyTemplates = ({ templates }: { templates: any[] }) => {
  const router = useRouter();

  console.log("Templates: ", templates);

  if (!templates || templates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/no-data.png" height={300} width={300} alt="No Data" />
        <Button
          className="flex items-center gap-2"
          onClick={() => router.push("/create")}
        >
          <PlusIcon className="h-4 w-4" />
          Create New
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.tid}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition
            cursor-pointer
            "
            onClick={() => router.push(`/editor/${template.tid}`)}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Template ID:
            </h3>
            <p className="text-gray-600 text-sm break-all">{template.tid}</p>
            <Image src="/no-data.png" height={300} width={300} alt="No Data" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTemplates;
