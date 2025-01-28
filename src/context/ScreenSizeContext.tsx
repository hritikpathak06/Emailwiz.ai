"use client";
import { createContext, ReactNode, useContext, useState } from "react";

const ScreenSizeContext = createContext<any>(undefined);

type ScreenSizeProp = "desktop" | "mobile";

export const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
  const [screenSize, setScreenSize] = useState<ScreenSizeProp>("desktop");


  const handleScreenSize = (value: "desktop" | "mobile") => {
    setScreenSize(value);
  };

  return (
    <>
      <ScreenSizeContext.Provider
        value={{ screenSize, setScreenSize, handleScreenSize }}
      >
        {children}
      </ScreenSizeContext.Provider>
    </>
  );
};

export const useManageScreenSize = () => {
  return useContext(ScreenSizeContext);
};
