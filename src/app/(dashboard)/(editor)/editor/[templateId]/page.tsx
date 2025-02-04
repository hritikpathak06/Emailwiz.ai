"use client";
import { getSingleTemplate } from "@/action/AiResponse";
import Canvas from "@/components/client/Editor/Canvas";
import EditorHeader from "@/components/client/Editor/EditorHeader";
import Settings from "@/components/client/Editor/Settings";
import Sidebar from "@/components/client/Editor/Sidebar";
import { useDragDrop } from "@/context/DragDropContext";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [viewHTMLCode, setViewHTMLCode] = useState<any>(null);
  const { templateId } =
    typeof window !== "undefined" ? useParams() : { templateId: null };

  const { emailTemplate, setEmailTemplate } = useDragDrop();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!templateId) {
      console.warn("templateId is undefined or invalid.");
      return;
    }

    const fetchTemplate = async () => {
      try {
        console.log("Template id ==>> ", templateId);

        const data: any = await getSingleTemplate(templateId);
        const { design } = data;

        let cleanedDesign = design;

        if (typeof cleanedDesign === "string") {
          cleanedDesign = cleanedDesign
            .replace(/^```json\s+/g, "")
            .replace(/\s+```$/, "");
          try {
            const parsedDesign = JSON.parse(cleanedDesign);
            console.log("Parsed Design ==>>> ", parsedDesign);
            setEmailTemplate(parsedDesign);
          } catch (parseError) {
            console.error("Failed to parse cleaned design JSON:", parseError);
          }
        }
      } catch (error) {
        console.error("Failed to fetch the template:", error);
      }
    };

    fetchTemplate();
  }, [templateId]);

  return (
    <>
      <div>
        <EditorHeader viewHTMLCode={(v: any) => setViewHTMLCode(v)} />

        <div className="grid grid-cols-5">
          <div className="max-h-[90vh] overflow-auto">
            <Sidebar />
          </div>
          <div className="col-span-3 max-h-[90vh] overflow-auto bg-gray-200">
            <Canvas
              viewHTMLCode={viewHTMLCode}
              closeDialog={() => setViewHTMLCode(null)}
            />
          </div>
          <div className="max-h-[90vh] overflow-auto">
            <Settings />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
