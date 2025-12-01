import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/homepage/HomePage";
import Demo from "./Components/demo/Demo";
import Stopwatch from "./Components/stopwatch/stopwatch";


const Routing = () => {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/demo" element={<Demo/>}></Route>
        <Route exact path="/stopwatch" element={<Stopwatch/>}></Route>
        
    </Routes>
    </>
  )
}

export default Routing