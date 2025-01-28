import React from "react";

const ElementCard = ({ layout }: any) => {
  return (
    <>
      <div
        className=" flex flex-col items-center justify-center border rounded-xl p-3 group  cursor-pointer transition-all hover:border-blue-500"
      >
        {<layout.icon className="h-3 w-3" />}
        <h2 className=" text-sm">{layout.label}</h2>
      </div>
    </>
  );
};

export default ElementCard;
