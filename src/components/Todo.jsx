import React, { useState } from 'react'
import  './Todo.css'
const Todo = () => {

    const [data, setData]= useState([]);

    function invokeList() {
        const value = { data:document.getElementById("inp").value, crossed:false }

        setData([...data, value]);
        document.getElementById("inp").value = '';
    }

    const handleItemClick = (item) => {

        const newData = data.map((d) => {
            return d.data == item.data ? {...d, crossed: !item.crossed} : d
        })
        setData(newData)
      };

  return (
    <div className='main'>
      <div>
        <input id='inp'></input>
        <button className='btn' onClick={invokeList}>Submit</button>
      </div>
      <ul>
        {data.map((d)=> (
            <li key={d.data} onClick={() => handleItemClick(d)} style={d.crossed ? { textDecoration: 'line-through' } : null}>{d.data}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;
