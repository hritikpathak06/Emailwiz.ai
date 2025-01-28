"use client";
import { sidebar_data_elements, sidebar_data_layout } from "@/lib/data";
import React from "react";
import ElementCard from "./ElementCard";
import { useDragDrop } from "@/context/DragDropContext";

const Sidebar = () => {
  const { dragElementLayout, setDragElementLayout } = useDragDrop();
  const onDragLayoutStart = (layout: any) => {
    setDragElementLayout({
      dragLayout: {
        ...layout,
        id: Date.now(),
      },
    });
  };

  const onDragElementStart = (element: any) => {
    setDragElementLayout({
      dragElement: {
        ...element,
        id: Date.now(),
      },
    });
  };

  return (
    <div className="p-4 flex flex-col gap-2 h-screen shadow-sm">
      <h2 className=" font-bold text-lg p-1 mt-8">Layouts</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {sidebar_data_layout.map((layout) => {
          return (
            <div
              key={layout.label || layout.type}
              draggable
              onDragStart={() => onDragLayoutStart(layout)}
            >
              <ElementCard layout={layout} />
            </div>
          );
        })}
      </div>

      <h2 className=" font-bold text-lg p-1 mt-8">Elements</h2>
      <div className=" grid grid-col-1 md:grid-cols-2 gap-5">
        {sidebar_data_elements.map((element, index) => {
          return (
            <>
              <div
                key={index}
                draggable
                onDragStart={() => onDragElementStart(element)}
              >
                <ElementCard layout={element} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
