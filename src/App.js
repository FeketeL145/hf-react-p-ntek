import './App.css';
import React, { useState, useEffect} from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() =>{
    document.title = "Kattintások száma: " + clickCount;
    console.log(clickCount);
    
  }, [clickCount]);
  return (
    <center>
    Kattintások száma: {clickCount}
    <br/>
    <span>
    <button
    className='btn btn-primary'
    onClick={() => {
      setClickCount((elozo) => elozo + 1);
    }}
    >
      Kattints!
    </button>
    </span>
    <BoxComponent clickCount={clickCount}></BoxComponent>
    
    </center>
  );
}

function BoxComponent(props){
  return(
    <div
    className="p-2 m-5 rounded"
    style=
      {{
        width: "200px",
        height: "200px",
        backgroundColor: "green",
      }}
    >
      {props.clickCount}
    </div>
  );
}
export default App;
