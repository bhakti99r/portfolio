import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/homepage/HomePage";
import Demo from "./Components/demo/Demo";
import Stopwatch from "./Components/stopwatch/stopwatch";
import Example from "./pages/example";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/portfolio" element={<HomePage />}></Route>
        <Route exact path="/demo" element={<Demo />}></Route>
        <Route exact path="/stopwatch" element={<Stopwatch />}></Route>
        <Route exact path="/" element={<Example />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
