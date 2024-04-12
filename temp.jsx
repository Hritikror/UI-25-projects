import React, { useEffect, useLayoutEffect, useState } from 'react';

export default function Temp() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log('useEffect: Component rendered');
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect: Component rendered');
  });

  return (
    <div>
      <p>Component{console.log("Middle")}</p>
    </div>
  );
}