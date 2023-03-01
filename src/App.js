import "./App.css";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Background from "./components/Background";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("aa");

  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
      if (count % 2 == 0) {
        setText(`${count - 1} tek sayıdır`);
      } else {
        setText(`${count - 1} çift sayıdır`);
      }
    }
  };

  const inc = () => {
    if (count < 20) {
      setCount(count + 1);
      if (count % 2 == 0) {
        setText(`${count + 1} tek sayıdır`);
      } else {
        setText(`${count + 1} cift sayıdır`);
      }
    }
  };
  
  const [veri, setVeri] = useState("")
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => setVeri(res.data[id].title))
    .catch(err => console.log(err)
    )
  }, [veri, id])
  

  return (
    <div className="container text-center mt-5">
      <h1 className="bg-success">1.Step Increment-Decrement</h1>
      <h2>Use State Hook</h2>
      <h2> {count} </h2>
      <h3> {text} </h3>

      <button onClick={dec}> - </button>
      <button onClick={() => setCount(0)}> Reset </button>
      <button onClick={inc}> + </button>
      <br />
      <br />

      <Counter/>
      <Background/>


      <h1 className="bg-success">4.Step Axios Veri Cekme</h1>

      <h1>{veri}</h1>
      <p>
        <h5>sayı gir</h5>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
      </p>

    
    </div>
  );
}

export default App;
