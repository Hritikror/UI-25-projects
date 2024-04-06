import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./index.css";

const ImageSlider = ({ url }) => {
  const [images, setImages] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  async function fetchImages() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErr(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  function handleClick(arrow) {
    if(arrow === "left") {
        if(currSlide === 0) setCurrSlide(images.length -1)
        else setCurrSlide(currSlide-1)
    }
    else {
        if(currSlide === images.length-1) setCurrSlide(0)
        else setCurrSlide(currSlide+1)
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return <div>{err}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={()=>handleClick("left")}/>
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className={
                index === currSlide
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={()=>handleClick("right")}/>
      {
        <span className="circle-indicators">
            {images && images.length ? 
                images.map((_,index)=>(
                    <button
                        key={index}
                        className={index === currSlide ? "current-indicator" : "current-indicator inactive-indicator"}
                        onClick={()=>setCurrSlide(index)}
                    />
                )) : null
            }

        </span>
      }
    </div>
  );
};

export default ImageSlider;
