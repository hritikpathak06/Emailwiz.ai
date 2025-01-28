import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

const ToggleField = ({ label, value, onHandleInputChnage }: any) => {
  console.log("Value==>> ", value);

  return (
    <div>
      <Label>{label}</Label>
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={(selectedValue) => onHandleInputChnage(selectedValue)}
      >
        <ToggleGroupItem value="left">
          <AlignLeft className={`${value === "left" ? "bg-blue-500" : ""}`} />
        </ToggleGroupItem>
        <ToggleGroupItem value="center">
          <AlignCenter
            className={`${value === "center" ? "bg-blue-500" : ""}`}
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="right">
          <AlignRight className={`${value === "right" ? "bg-blue-500" : ""}`} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ToggleField;
