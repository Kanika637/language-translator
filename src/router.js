import React from "react"
import {  Route,  ReactLocation } from "react-location";
import Homepage from "./Homepage";
import Translate from "./Translate";
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
// {
//         path:"/t",
//         element:<Translate2/>
// },


];

export const location = new ReactLocation();