import { useState, useEffect } from "react";

function Hello(){
  return(
    <div>Hello</div>
  );
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