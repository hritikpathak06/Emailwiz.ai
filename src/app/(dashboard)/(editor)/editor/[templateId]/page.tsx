"use client";
import { getSingleTemplate } from "@/action/AiResponse";
import Canvas from "@/components/client/Editor/Canvas";
import EditorHeader from "@/components/client/Editor/EditorHeader";
import Settings from "@/components/client/Editor/Settings";
import Sidebar from "@/components/client/Editor/Sidebar";
import { useDragDrop } from "@/context/DragDropContext";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [viewHTMLCode, setViewHTMLCode] = useState();
  const { templateId } = useParams();

  const [template, setTemplate] = useState({});
  const { emailTemplate, setEmailTemplate } = useDragDrop();

  useEffect(() => {
    // Ensure templateId is valid before calling the API
    if (!templateId) {
      console.warn("templateId is undefined or invalid.");
      return;
    }

    const fetchTemplate = async () => {
      try {
        console.log("Template id ==>> ", templateId);
    
        const data: any = await getSingleTemplate(templateId); // Fetch the template
        const { design } = data;
    
        // Remove the surrounding ```json and parse it if necessary
        let cleanedDesign = design;
    
        // Remove the ```json``` wrapper if it exists
        if (typeof cleanedDesign === "string") {
          cleanedDesign = cleanedDesign.replace(/^```json\s+/g, '').replace(/\s+```$/, '');  // Removing both the starting and ending ```json
          try {
            // Now, parse the cleaned design string into an array
            const parsedDesign = JSON.parse(cleanedDesign);
            console.log("Parsed Design ==>>> ", parsedDesign);
            setEmailTemplate(parsedDesign)
            // Example: set the design in state (emailTemplates)
            // setEmailTemplates(parsedDesign);
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

        <div className=" grid  grid-cols-5 ">
          <div className=" max-h-[90vh] overflow-auto">
            <Sidebar />
          </div>
          <div className="col-span-3 max-h-[90vh] overflow-auto bg-gray-200">
            <Canvas
              viewHTMLCode={viewHTMLCode}
              closeDialog={() => setViewHTMLCode(false as any)}
            />
          </div>
          <div className=" max-h-[90vh] overflow-auto">
            <Settings />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
