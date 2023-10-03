import React, { useState, useEffect } from "react";
import Home from "./components/home/index.js";
import Loader from "./components/loader/index.js";
function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);
  // }, []);
  // return <>{loading ? <Loader /> : <Home />}</>;
  return <><Home /></>;
}

export default App;
