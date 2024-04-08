import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './components/Todo'
import Accordian from './components/accordian/index';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/start-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMore from './components/load-more-button/LoadMore';
import Menu from './components/tree-view/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    {/* <Accordian/> */}

    {/* <RandomColor/> */}

    {/* <StarRating noOfStarts={10}/> */}

    {/* <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=10"} /> */}

    {/* <LoadMore/> */}

    <Menu/>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
