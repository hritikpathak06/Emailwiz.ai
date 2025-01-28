import React from "react";

const ImageComp = ({ style, outerStyle, imageUrl,url }: any) => {
  return (
    <>
      <div style={outerStyle}>
        <img src={url !== "#"? url : imageUrl} alt="Image" style={style} />
      </div>
    </>
  );
};

export default ImageComp;
