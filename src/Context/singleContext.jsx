import { createContext, useState } from "react";

export const SingleContext = createContext()

export const SingleContextProvider = ({children})=>{
    const[pagedata,setPagedata] = useState({})
    return(
        <SingleContext.Provider value={{pagedata,setPagedata}}>
            {children}
        </SingleContext.Provider>
    )
}