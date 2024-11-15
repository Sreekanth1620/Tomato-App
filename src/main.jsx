import App from "./App";
import Reactdom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StoreContextProvider } from "./context/StoreContext";
Reactdom.render(<StoreContextProvider><BrowserRouter><App/></BrowserRouter></StoreContextProvider>,document.getElementById('root'))
