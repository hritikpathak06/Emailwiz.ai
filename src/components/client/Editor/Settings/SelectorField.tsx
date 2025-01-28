import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

interface SelectorFieldProps {
  label: string;
  value: string;
  onHandleInputChnage: any;
  type?: string; // Optional type prop to specify if it's percentage or px
}

const SelectorField = ({
  label,
  value,
  onHandleInputChnage,
  type,
}: SelectorFieldProps) => {
  const [currentValue, setCurrentValue] = useState(value); // Remove px or % to store the numeric value

  const handleSelectorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let updated_val;

    if (type === "percentage") {
      updated_val = `${inputValue}%`; // If the type is percentage, add % symbol
    } else {
      updated_val = `${inputValue}px`; // Default to px
    }

    setCurrentValue(inputValue); // Update the current value while dragging
    onHandleInputChnage(updated_val); // Pass the updated value to the parent
  };

  return (
    <div>
      <Label>{label}</Label>
      <div className="relative">
        <Input
          type="range"
          min="0"
          max="100"
          value={parseInt(currentValue)} // Ensure the value passed is numeric
          onChange={handleSelectorChange}
        />
        {/* Display the value while scrolling */}
        <div
          className="absolute top-[-25px] left-1/2 transform -translate-x-1/2"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          {currentValue} {type === "percentage" ? "%" : "px"}
        </div>
      </div>
    </div>
  );
};

export default SelectorField;
