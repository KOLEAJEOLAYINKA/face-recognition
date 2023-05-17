import React from "react";

import './imageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className="f3">
      <p>{"The recognition face will detect face in your picture. Give it a try"}</p>
      <div className="center">
        <div className="link-form form center">
          <input placeholder="Enter the image link" type={"text"} onChange={onInputChange} />
          <button className="detect-btn grow" onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
