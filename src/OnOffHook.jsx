import React, { useEffect, useState } from 'react'

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener("online", ( ) => {
            setIsOnline(true);
        })

        window.addEventListener("offline", ( ) => {
            setIsOnline(false);
        })
    }, [])
    
    return isOnline;
}


function useInterval(fn , timeout) {
  useEffect(( ) => {

    setInterval(() => {
      fn();
    }, timeout); 

  }, [timeout])

}

const OnOffHook = () => {
  const [count , setCount] = useState(0);
  useInterval( () => {
    setCount(c => c+1)
  }, 1000);

    // const isOnline = useIsOnline();
  return (
    <div>
      {count};
    </div>
  )
}

export default OnOffHook
