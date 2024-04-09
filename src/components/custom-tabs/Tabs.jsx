import React from "react";

const Tabs = ({ tabsContent, contentFunc, dataNow }) => {
  function handleClick(id) {
    contentFunc(id);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent && tabsContent.length
          ? tabsContent.map((item, index) => (
              <div  key={item.label} onClick={() => handleClick(index)}>
                {item.label}
              </div>
            ))
          : null}
        {dataNow}
      </div>
    </div>
  );
};

export default Tabs;
