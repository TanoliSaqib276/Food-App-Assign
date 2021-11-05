import React, { useContext } from "react";
import {
    Link

    
} from "react-router-dom";
import { auth } from "../configs/firebase";
import { GlobalContext } from "../context/globalContext";






export function Nav() {
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <nav>
            <ul>


               

              
                
              



            </ul>
        </nav>
    )

}