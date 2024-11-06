import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";


const Router=createBrowserRouter(
    createRoutesFromElements(
        <>
             <Route path="/" element={<RootLayout />} >
             <Route index element={<Home/>} />
             <Route path="destination" element={<Destination/>}/>
             <Route path="crew" element={<Crew/>}/>
             <Route path="technology" element={<Technology/>}/>
             </Route>
        </>


    )
)



export default Router;