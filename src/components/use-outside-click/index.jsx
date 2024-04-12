

import React, { useEffect } from 'react'

const useOutsideClick = (ref,handler) => {
  
    useEffect(()=>{

        function listener(event) {
            console.log(event,ref)

            if(!ref.current || ref.current.contains(event.target)) {
                return
            }
            console.log(handler)

            handler();
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown',listener);
            document.removeEventListener('touchstart',listener);
        }

    },[ref,handler])
}

export default useOutsideClick
