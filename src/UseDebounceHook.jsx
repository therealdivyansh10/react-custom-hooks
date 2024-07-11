import React, { useEffect, useState } from "react";

function useDebounce(value, timeout) {

    const [debouncedValue, setDebouncedValue ] = useState(value);

    useEffect(() => {
        setTimeout(( ) => {
            setDebouncedValue(value);
        }, timeout);
    }, [value])

    return debouncedValue;
}


const UseDebounceHook = () => {

    const [value, setValue] = useState(0);
    const deboundedValue = useDebounce(value, 500);

  return (
    <diiv>
      Debouncded value is {deboundedValue};
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </diiv>
  );
};

export default UseDebounceHook;
