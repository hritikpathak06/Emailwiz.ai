import React from "react";

const ButtonComp = ({ style, content, url,outerStyle }: any) => {
  return (
    <div style={outerStyle}>
      <a href={url}>
        <button style={style}>{content}</button>
      </a>
    </div>
  );
};

export default ButtonComp;
