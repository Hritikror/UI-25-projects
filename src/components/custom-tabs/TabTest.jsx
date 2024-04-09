import React, { useState } from 'react'
import Tabs from './Tabs';

function RandomComponent() {
    return <h1>Some random content</h1>;
  }

const TabTest = () => {

    const[data,setData] = useState("");

    const tabs = [
        {
          label: "Tab 1",
          content: <div>This is content for Tab 1</div>,
        },
        {
          label: "Tab 2",
          content: <div>This is content for Tab 2</div>,
        },
        {
          label: "Tab 3",
          content: <RandomComponent />,
        },
      ];

      function clickedItem(id) {
        setData(tabs[id].content)
      }

  return (
    <div>
      <Tabs tabsContent={tabs}  contentFunc={clickedItem} dataNow={data}/>
    </div>
  )
}

export default TabTest
