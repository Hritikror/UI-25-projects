import React, { useState } from "react";
import data from "./data";
import './index.css'

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  function handleSingleSelection(itemId) {
    if(enableMultiSelection) {
      let cypMultiple = [...multiSelected];
      const findIndexOfCurrentId = cypMultiple.indexOf(itemId); 
      if(findIndexOfCurrentId !== -1) {
        cypMultiple.splice(findIndexOfCurrentId,1);
      } else {
        cypMultiple.push(itemId)
      }
      setMultiSelected(cypMultiple)
    } else {
      setSelected(selected === itemId ? null: itemId)
    }
    
  }



  return (
    <div>
      <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection ? <span>Enable MultiAccordian</span> :  <span>Disable MultiAccordian</span>}</button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="item" key={item.id}>
                <div
                  onClick={() => handleSingleSelection(item.id)}
                  className="title"
                >
                  <h3>{item.question}</h3>
                  <span>{selected === item.id || multiSelected.indexOf(item.id) !== -1 ? <span>-</span> : <span>+</span>}</span>
                </div>
                {selected === item.id || multiSelected.indexOf(item.id) !== -1 ? <div className="content">{item.answer}</div> : null}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
