import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = ({noOfStarts = 5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);



    function handleStar(currIndex, event) {
       switch (event) {
        case "click":
            setRating(currIndex)
            break;
        case "move":
            setHover(currIndex);
            break;
        case "leave":
            setHover(0);
            break;
       
       } 
    }
  return (
    <div className='star-rating' style={{textAlign:'center'}}>
    {
        [...Array(noOfStarts)].map((_,index)=> {
            return <FaStar
                key={index}
                onClick={()=>handleStar(index+1,"click")}
                onMouseMove={()=>handleStar(index+1,"move")}
                onMouseLeave={()=>handleStar(index+1,"leave")}
                size={40}
                style={index<rating || index<hover ? {color:'red'} : null}
            />
        })
    }
    </div>
  )
}

export default StarRating
