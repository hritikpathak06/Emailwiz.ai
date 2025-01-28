import React from "react";
import ColorPicker from "@rc-component/color-picker";
import "@rc-component/color-picker/assets/index.css";
import { Label } from "@/components/ui/label";

const ColorPickerField = ({ label, value, onHandleInputChnage }: any) => {
  const handleColorChange = (color: any) => {
    const { r, g, b } = color; // Extract RGB values
    const hexColor = `#${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)}`;
    onHandleInputChnage([hexColor]);
  };

  return (
    <div>
      <Label>{label}</Label>
      <ColorPicker onChange={(val) => handleColorChange(val)} />
    </div>
  );
};

export default ColorPickerField;
