import { Appreducer } from "./Appreducer";
import { useState, useEffect , createContext, useReducer} from "react";

// const {, , useState } = require("react");
let initialState={cart:[]}

export const Appcontext = createContext()



export const Appcontextprovider = ({children})=>{
        
        const[state,dispatch]=useReducer(Appreducer,initialState)
        const [total,setTotal]=useState(0)

        useEffect(()=>{
            setTotal(state.cart.reduce((acc,ini)=>{
                return acc + (Number(ini.price) * Number(ini.qty))
            },0))
        },[state.cart])
    return (
        <Appcontext.Provider value={{state,dispatch,total}}>
            {children}
        </Appcontext.Provider>
    )
}