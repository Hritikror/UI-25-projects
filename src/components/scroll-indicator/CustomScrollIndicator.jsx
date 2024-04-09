import React, { useEffect, useState, Suspense } from "react";
import "./index.css";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

const CustomScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(true);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const res = await response.json();

      setData(res.products);
      setLoading(false);
    } catch (e) {
      console.log(error);
      setLoading(false);
      setError(e.message);
    }
  }

  function handlePer() {
    //console.log(document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    const percentageScrolled = Math.floor(
      (scrollTop * 100) / (scrollHeight - clientHeight)
    );
    console.log(percentageScrolled);
    setPercentage(percentageScrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", handlePer);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (loading) {
    return <div>Loading please wait.........</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator - {percentage}%</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
      {percentage == 100 && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default CustomScrollIndicator;
