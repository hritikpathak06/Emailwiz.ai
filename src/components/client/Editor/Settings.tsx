"use client";
import React, { useEffect, useState } from "react";
import InputField from "./Settings/InputField";
import { useDragDrop } from "@/context/DragDropContext";
import ColorPickerField from "./Settings/ColorPickerField";
import InputSize from "./Settings/InputSize";
import TextAreaInputField from "./Settings/TextAreaInputField";
import SelectorField from "./Settings/SelectorField";
import ToggleField from "./Settings/ToggleField";

const Settings = () => {
  const { selectedElement, setSelectedElement } = useDragDrop();

  const [element, setElement] = useState<any>();

  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement.index]);
  }, [selectedElement]);

  // console.log("Element==>> ", element);

  const onHandleInputChnage = (fieldName: string, value: any) => {
    console.log("Field Name==>> ", fieldName);
    console.log("Value==>> ", value);

    // Create a copy of the selected element
    const updatedData = { ...selectedElement };

    // Check if the field is nested under 'style'
    if (fieldName === "backgroundColor" || fieldName === "color") {
      updatedData.layout[selectedElement.index].style = {
        ...updatedData.layout[selectedElement.index].style,
        backgroundColor: value,
      };
    } else {
      // Update the field directly
      updatedData.layout[selectedElement.index][fieldName] = value;
    }

    // Update the original selected element
    setSelectedElement(updatedData);
  };

  const handleStyleChange = (fieldName: string, value: any) => {
    const updatedData = { ...selectedElement };

    // Ensure the style object exists and update the specific field
    updatedData.layout[selectedElement.index].style = {
      ...updatedData.layout[selectedElement.index].style, // Preserve other style properties
      [fieldName]: value, // Dynamically set the field value
    };

    // Update the selected element
    setSelectedElement(updatedData);
  };

  const handleOuterStyleChange = (fieldName: string, value: any) => {
    const updatedData = { ...selectedElement };

    // Ensure the style object exists and update the specific field
    updatedData.layout[selectedElement.index].outerStyle = {
      ...updatedData.layout[selectedElement.index].outerStyle,
      [fieldName]: value,
    };

    console.log("Updated Data==>> ", updatedData);

    // Update the selected element
    setSelectedElement(updatedData);
  };
  return (
    <>
      <div className=" p-5 flex flex-col gap-4">
        <h2 className=" font-bold text-xl">Setting</h2>
        {element?.content && (
          <InputField
            label={"Content"}
            value={element?.content}
            onHandleInputChnage={(value: any) =>
              onHandleInputChnage("content", value as any)
            }
          />
        )}

        {element?.textarea && (
          <TextAreaInputField
            label={"Add Text"}
            value={element?.textarea}
            onHandleInputChnage={(value: any) =>
              onHandleInputChnage("textarea", value as any)
            }
          />
        )}

        {element?.url && (
          <InputField
            label={"Url"}
            value={element?.url}
            onHandleInputChnage={(value: any) =>
              onHandleInputChnage("url", value as any)
            }
          />
        )}

        {element?.style?.backgroundColor && (
          <ColorPickerField
            label="Background Color"
            value={element?.style?.backgroundColor}
            onHandleInputChnage={(value: any) =>
              handleStyleChange("backgroundColor", value as any)
            }
          />
        )}

        {element?.style.color && (
          <ColorPickerField
            label="Text Color"
            value={element?.style?.color}
            onHandleInputChnage={(value: any) =>
              handleStyleChange("color", value as any)
            }
          />
        )}

        {element?.style.fontSize && (
          <InputSize
            label={"Font Size"}
            value={element?.style.fontSize}
            onHandleInputChnage={(value: any) =>
              handleStyleChange("fontSize", value)
            }
          />
        )}

        {element?.style.padding && (
          <SelectorField
            label={"Padding"}
            value={element?.style.padding}
            onHandleInputChnage={(value: any) =>
              handleStyleChange("padding", value)
            }
          />
        )}

        {element?.style.borderRadius && (
          <SelectorField
            label={"Radius"}
            value={element?.style.borderRadius}
            onHandleInputChnage={(value: any) =>
              handleStyleChange("borderRadius", value)
            }
          />
        )}

        {element?.outerStyle?.width && (
          <SelectorField
            label={"Width"}
            type="percentage"
            value={element?.outerStyle?.width}
            onHandleInputChnage={(value: any) =>
              handleOuterStyleChange("width", value)
            }
          />
        )}

        {element?.style?.textAlign && (
          <ToggleField
            label={"Align Text"}
            value={element?.style?.textAlign}
            onHandleInputChnage={(value: any) =>
              handleStyleChange("textAlign", value)
            }
          />
        )}
      </div>
    </>
  );
};

export default Settings;
