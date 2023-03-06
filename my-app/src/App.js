import { useState, useEffect } from "react";

function Hello(){
  function byfn(){
    console.log("bye:(");
  }
  function hifn(){
    console.log("created :)");
    return byfn;
  }
  useEffect ((function name(params) {
    
  }), []);
  return <h1>Hello</h1>;
}

function Show(){
  const [showing, setShowing] = useState(false);
  const onclick = () => setShowing( (prev) => !prev);
  return (
  <div>
    {showing ? <Hello /> : null}
    <button onClick={onclick}>{showing ? "Hide" : "show"}</button>
  </div>
  );
}

export default Show;