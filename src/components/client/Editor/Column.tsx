"use client";
import { useDragDrop } from "@/context/DragDropContext";
import React, { useState } from "react";
import ButtonComp from "./ElemComp/ButtonComp";
import TextComp from "./ElemComp/TextComp";
import ImageComp from "./ElemComp/ImageComp";
import LogoComp from "./ElemComp/LogoComp";
import Divider from "./ElemComp/Divider";
import { Trash2Icon } from "lucide-react";

const Column = ({ layout }: any) => {
  const [dragOver, setDragOver] = useState<any>();
  const {
    dragElementLayout,
    setEmailTemplate,
    emailTemplate,
    selectedElement,
    setSelectedElement,
  } = useDragDrop();

  const handleDropElement = () => {
    const index = dragOver?.index - 1;
    setEmailTemplate((prevItem: any) =>
      prevItem.map((col: any) =>
        col.id === layout.id
          ? { ...col, [index]: dragElementLayout?.dragElement }
          : col
      )
    );
    setDragOver(null);
  };

  const getElementComponent = (element: any) => {
    switch (element?.type) {
      case "Button":
        return <ButtonComp {...element} />;
      case "Text":
        return <TextComp {...element} />;
      case "Image":
        return <ImageComp {...element} />;
      case "Logo":
        return <LogoComp {...element} />;
      case "Divider":
        return <Divider {...element} />;
      default:
        return null;
    }
  };

  const handleDeleteColumn = (selectedCol: any) => {
    const updated_data = emailTemplate.filter(
      (item: any) => item.id !== selectedCol
    );
    setEmailTemplate(updated_data);
    setSelectedElement(null);
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${layout?.numOfCol},1fr)`,
            gap: 0,
          }}
          className={` relative ${
            selectedElement?.layout?.id === layout?.id
              ? "border-4 border-blue-500"
              : null
          }`}
        >
          {Array.from({ length: layout.numOfCol }).map((_, index) => {
            return (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver({
                    index: index + 1,
                    columnId: layout?.id,
                  });
                }}
                onDrop={() => handleDropElement()}
                onClick={() =>
                  setSelectedElement({
                    layout: layout,
                    index: index,
                  })
                }
                key={index}
                className={`
                  p-2 flex items-center justify-center bg-gray-100 border
                  ${
                    index === dragOver?.index - 1 && dragOver?.columnId
                      ? "bg-green-300"
                      : ""
                  }
                  border-dashed
                  ${
                    selectedElement?.layout?.id === layout?.id &&
                    selectedElement?.index === index
                      ? "border-blue-400 border border-b-2"
                      : ""
                  }
                `}
              >
                {getElementComponent(layout?.[index] as any) as any}
              </div>
            );
          })}

          {selectedElement?.layout?.id === layout?.id && (
            <div className=" absolute -right-10 bg-gray-300 p-2 rounded-full">
              <Trash2Icon
                className="h-4 w-4 text-red-400 cursor-pointer"
                onClick={() => handleDeleteColumn(layout.id)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Column;
