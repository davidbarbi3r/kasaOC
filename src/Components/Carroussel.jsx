import "./Carroussel.css";
import React from "react";

function Carroussel(props) {
  const [currentImage, setCurrentImage] = React.useState(0);

  function handleLeftArrowClick() {
    setCurrentImage((currentImage) => {
      if (currentImage === 0) {
        return props.images.length - 1;
      } else {
        return currentImage - 1;
      }
    });
  }

  function handleRightArrowClick() {
    setCurrentImage((currentImage) => {
      if (currentImage === props.images.length - 1) {
        return 0;
      } else {
        return currentImage + 1;
      }
    });
  }

  return (
    <div className="carroussel-container">
      <div className="carroussel">
        <div className="carroussel-item">
          <img src={props.images[currentImage]} alt="carroussel-item" />
        </div>
        {props.images.length > 1 && (
          <>
            <button
              className="left-arrow"
              onClick={() => handleLeftArrowClick()}
            >
              <img src="../assets/arrow.svg" alt="left-arrow" />
            </button>
            <button
              className="right-arrow"
              onClick={() => handleRightArrowClick()}
            >
              <img src="../assets/arrow.svg" alt="right-arrow" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Carroussel;
