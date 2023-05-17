import React from "react";

export const FaceRecognition = ({ imgUrl }) => {
  const Url = `${imgUrl}`;
  return (
    <div classname="centre">
      <img className="recognitionImage" src={Url} alt={""} />
      {/* <p>{Url}</p> */}
    </div>
  );
};
