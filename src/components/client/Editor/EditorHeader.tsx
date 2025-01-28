"use client";
import { Button } from "@/components/ui/button";
import { useManageScreenSize } from "@/context/ScreenSizeContext";
import { Code, MonitorIcon, Smartphone } from "lucide-react";
import Image from "next/image";
import React from "react";

const EditorHeader = ({viewHTMLCode}:any) => {
  const { screenSize, handleScreenSize } = useManageScreenSize();


  return (
    <div className="w-full shadow-sm p-2 flex items-center justify-between gap-4 px-20">
      <Image src={"/logo.png"} height={100} width={100} alt="logo" />
      <div className="flex items-center gap-5">
        <Button
          variant={screenSize === "desktop" ? "outline" : "ghost"}
          onClick={() => handleScreenSize("desktop")} // Corrected here
        >
          <MonitorIcon />
        </Button>
        <Button
          variant={screenSize === "mobile" ? "outline" : "ghost"}
          onClick={() => handleScreenSize("mobile")} // Corrected here
        >
          <Smartphone />
        </Button>
      </div>
      <div className="flex gap-3">
        <Button
          variant={"ghost"}
          className="hover:bg-blue-500 translate-x-0"
          onClick={() => viewHTMLCode(true)}
        >
          <Code />
        </Button>
        <Button variant={"outline"}>Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  );
};

export default EditorHeader;
