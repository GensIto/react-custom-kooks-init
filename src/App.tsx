import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useFetchData from "./hooks/useFetchData";
import useToggle from "./hooks/useToggle";

function App() {
  const { data } = useFetchData("https://jsonplaceholder.typicode.com/users");
  const { toggle, handleToggle } = useToggle(true);

  return (
    <div className='App'>
      <h1>{toggle ? "HI!" : "Bye!"}</h1>
      <button onClick={handleToggle}>Change</button>
      <ul>
        {data.map((v: any) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
