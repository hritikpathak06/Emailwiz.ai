"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const DragDropContext = createContext<any>(undefined);

export const DragDropProvider = ({ children }: { children: ReactNode }) => {
  const [dragElementLayout, setDragElementLayout] = useState<any>();
  const [selectedElement, setSelectedElement] = useState<any>();

  const [emailTemplate, setEmailTemplate] = useState<any>(
    JSON.parse(localStorage.getItem("emailTemplate") || "[]")
  );

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("emailTemplate", JSON.stringify(emailTemplate));
    }
  }, [emailTemplate]);

  useEffect(() => {
    if (selectedElement) {
      let updated_email_template: any = [];
      emailTemplate.forEach((item: any, index: number) => {
        if (item?.id === selectedElement?.layout?.id) {
          updated_email_template.push(selectedElement.layout);
        } else {
          updated_email_template.push(item);
        }
      });
      setEmailTemplate(updated_email_template);
    }
  }, [selectedElement]);

  return (
    <>
      <DragDropContext.Provider
        value={{
          dragElementLayout,
          setDragElementLayout,
          emailTemplate,
          setEmailTemplate,
          selectedElement,
          setSelectedElement,
        }}
      >
        {children}
      </DragDropContext.Provider>
    </>
  );
};

export const useDragDrop = () => {
  return useContext(DragDropContext);
};
