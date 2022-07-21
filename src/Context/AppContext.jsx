import { Appreducer } from "./Appreducer";

const { createContext, useReducer } = require("react");
let initialState={cart:[]}

export const Appcontext = createContext()



export const Appcontextprovider = ({children})=>{
        const[state,dispatch]=useReducer(Appreducer,initialState)
    return (
        <Appcontext.Provider value={{state,dispatch}}>
            {children}
        </Appcontext.Provider>
    )
}