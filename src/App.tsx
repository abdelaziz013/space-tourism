// import './App.css'

import { UIProvider } from "./components/UIManager";
import Home from "./pages/Home";
import "./styles/main.scss";

function App() {
  return (
    <>

<UIProvider>
<Home />
</UIProvider>


    </>
  );
}

export default App;
