import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const InputSize = ({ label, value, onHandleInputChnage }: any) => {
 

    const handleFontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.trim();
    
        const updated_val = inputValue === "" ? "0px" : `${inputValue.replace("px", "")}px`;
    
        onHandleInputChnage(updated_val);
      };

  return (
    <div className=" flex items-center gap-2">
      <div>
        <Label>{label}</Label>
        <Input value={value} onChange={handleFontChange} />
      </div>
      <h2 className=" mt-5">px</h2>
    </div>
  );
};

export default InputSize;
