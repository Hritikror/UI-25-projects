import React, { useEffect, useState } from "react";
import './index.css';

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [err, setErr] = useState(null);
  const [loading,setLoading] = useState(true);

  async function fetchProduct() {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=3&skip=${skip}`);
        const data = await response.json();

        setProducts([...products, ...data.products]);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        setErr(error.message);
    }
  }

  useEffect(()=> {
    fetchProduct();
  },[skip]);

  if(loading) {
    return <div>Loading...</div>
  }

  if(err) {
    return <div>err</div>
  }

  return (
    <div className="load-more-container">
      <div className="product-containerr">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title}></img>
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={skip===12} onClick={()=>setSkip(skip+3)}>Load More</button>
        {skip === 12? <div>No More data</div> : null}
      </div>
    </div>
  );
};

export default LoadMore;
