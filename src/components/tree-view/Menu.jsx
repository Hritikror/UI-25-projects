
import React from 'react'
import menus from './data';
import MenuList from './MenuList';

const Menu = () => {
  return (
    <div>
      <MenuList items={menus}/>
    </div>
  )
}

export default Menu;
