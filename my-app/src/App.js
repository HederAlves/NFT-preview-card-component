import './App.css';
import React, { useState } from 'react';


function Example() {
  const [exempe, ];
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}




function App() {
  return (<div className="App">
  <form>
    <ul>
      <li>
        <label>Nome</label>
        <input type="text"></input>
      </li>
      <li>
        <label>Login</label>
        <input type="text"></input>
      </li>
      <li>
        <label>Senha</label>
        <input type="text"></input>
      </li>
    </ul>
  </form>
 </div>
);
}
  

export default App;
