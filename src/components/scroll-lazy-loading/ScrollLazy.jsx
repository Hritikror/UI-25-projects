import React, { useEffect, useState } from 'react'
import './index.css'

const ScrollLazy = () => {

  const [data,setData] = useState([]);
  const [skip, setSkip] =useState(0);

  async function fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();
   
    setData([...data, ...result.products]);
  }

  function checkHeight() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop+clientHeight === scrollHeight) {
      setSkip(skip+5)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', checkHeight);
    fetchData(`https://dummyjson.com/products?limit=5&skip=${skip}`);
    return () => {
      window.removeEventListener('scroll', checkHeight);
    }
  },[skip]);

  return (
    
      <div className='heading'>
        <h1>Scrolllling By Lazy Loading</h1>
        {data  && data.length ?
          data.map(item=> <div className='data' key={item.id}>{item.title}</div>)
          : null}
      </div>
    
  )
}

export default ScrollLazy
