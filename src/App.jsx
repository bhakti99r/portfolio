
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Routing from "./Routing";
import "../src/assets/scss/style.scss";

function App() {

  return (
    <>
       <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
    </>
  )
}

export default App
