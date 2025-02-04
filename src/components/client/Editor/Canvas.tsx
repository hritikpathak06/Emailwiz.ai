"use client";
import { useDragDrop } from "@/context/DragDropContext";
import { useManageScreenSize } from "@/context/ScreenSizeContext";
import React, { useEffect, useRef, useState } from "react";
import Column from "./Column";
import HtmlDialog from "./HtmlDialog";
import { useHtmlCode } from "@/context/HtmlCodeGenerator";

const Canvas = ({ viewHTMLCode, closeDialog }: any) => {
  const { screenSize } = useManageScreenSize();
  const {
    dragElementLayout,
    setDragElementLayout,
    emailTemplate,
    setEmailTemplate,
  } = useDragDrop();

  const [dragOver, setDragOver] = useState<boolean>(false);
  const { htmlCode, setHtmlCode } = useHtmlCode();

  const htmlRef = useRef<any>(null);

  const handleDropLayout = () => {
    console.log("DragElemet==>> ", dragElementLayout);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate((prev: any) => [...prev, dragElementLayout?.dragLayout]);
    }
    setDragOver(false);
  };

  const getLayoutComponent = (layout: any) => {
    if (layout?.type === "column") {
      return <Column layout={layout} />;
    }
  };

  const GetHTMLCode = () => {
    if (htmlRef.current) {
      const htmlContent = htmlRef.current.innerHTML;
      setHtmlCode(htmlContent);
      console.log("HTML Content==>> ", htmlContent);
    }
  };

  useEffect(() => {
    viewHTMLCode && GetHTMLCode();
  }, [viewHTMLCode]);

  return (
    <>
      <div className=" mt-20 flex justify-center">
        <div
          onDragOver={(e) => {
            e.preventDefault(), setDragOver(true);
          }}
          ref={htmlRef}
          onDrop={() => handleDropLayout()}
          className={` bg-white p-6 w-full  
            ${dragOver && "bg-blue-500 p-4"}
            ${screenSize === "desktop" ? "max-w-3xl" : " max-w-md"}`}
        >
          {emailTemplate?.map((item: any, index: number) => {
            return (
              <>
                <div key={item}>{getLayoutComponent(item) as any}</div>
              </>
            );
          })}
        </div>
        <HtmlDialog
          openDialog={viewHTMLCode}
          htmlCode={htmlCode}
          closeDialog={closeDialog}
        />
      </div>
    </>
  );
};

export default Canvas;
