// import './App.css'

import { RouterProvider } from "react-router-dom";
import { UIProvider } from "./components/UIManager";

import "./styles/main.scss";
import Router from "./router";

function App() {
  return (
    <>

<UIProvider>
<RouterProvider router={Router} />
</UIProvider>


    </>
  );
}

export default App;
