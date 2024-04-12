import React, { useRef } from "react";
import { useState } from "react";
import useOutsideClick from './index'

const UseOnClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, ()=>setShowContent(false))

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            please click outside of this to close this. it won't close if you
            click inside the content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnClickOutsideTest;
