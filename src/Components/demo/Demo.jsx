
import { useState } from "react";
import "../demo/demo.scss"

const Demo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images =
    [
      "https://picsum.photos/100",
      "https://picsum.photos/200",
      "https://picsum.photos/300",
      "https://picsum.photos/400"
    ];

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="imgslider-wrap">
        <div className="imgslider" style={{ maxWidth: "300px" }}>
          <div>
            <img
              src={images[currentIndex]}
              alt="slider"
              style={{ width: "100%", height: "300px" }}
            />
          </div>
        </div>
        <div className="btn-wrapper">
          <button onClick={prev} disabled={currentIndex === 0}>Prev</button>
          <button onClick={next} disabled={currentIndex === images.length - 1}>Next</button>
        </div>
      </div>

    </>
  )
}

export default Demo