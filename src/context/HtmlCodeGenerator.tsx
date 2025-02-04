"use client";
import { createContext, ReactNode, useContext, useState } from "react";

const HtmlCodeGeneratorContext = createContext<any>(undefined);

export const HtmlCodeGeneratorProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [htmlCode, setHtmlCode] = useState();

  return (
    <HtmlCodeGeneratorContext.Provider value={{ htmlCode, setHtmlCode }}>
      {children}
    </HtmlCodeGeneratorContext.Provider>
  );
};

export const useHtmlCode = () => {
  return useContext(HtmlCodeGeneratorContext);
};
