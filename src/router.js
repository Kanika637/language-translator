import React from "react"
import {  Route,  ReactLocation } from "react-location";
import Homepage from "./Homepage";
import Translate from "./Translate";
import Footer from "./Footer";
// import Translate2 from "./Translate2";

export const routes: Route[] = [

{
        path:"/",
        element:<Homepage/>

},
{
        path:"/translate",
        element:<Translate/>
},
{
        path:"/footer",
        element:<Footer/>
}



];

export const location = new ReactLocation();