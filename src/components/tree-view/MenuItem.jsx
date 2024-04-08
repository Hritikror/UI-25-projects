import React, { useState } from 'react'
import MenuList from './MenuList';

const MenuItem = ({item}) => {

  const [displayChildren, setDisplayChildren] = useState(false);

  return (
    <li>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
      <p onClick={()=>setDisplayChildren(!displayChildren)}>{item.label}</p>
      {item && item.children && item.children.length ? (displayChildren ? <span style={{marginLeft:'10px'}}>-</span> : <span style={{marginLeft:'10px'}}>+</span>): null}
      </div>
      {item && item.children && item.children.length && displayChildren ? 
        <MenuList items={item.children} />
       : null}
    </li>
  )
}

export default MenuItem;
