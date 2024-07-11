import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [render, setRender] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(false);
    }, 5000);

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts before 5 seconds
  }, []);


  return(
    render? <MyComponent/>: ""
  )
}

const MyComponent = () => {
  useEffect(() => {
    console.log("component mountes now");
    // cleanup function to run when component mounts

    return () => {
      console.log("component unmounts now");
      // cleanup function to run when component unmounts or the dependency is changed;
      // remember a useEffect can only return a function
    };
  }, []);

  return (
    <div>Inside compoennt</div>
  )
};

export default App;
