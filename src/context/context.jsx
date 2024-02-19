import React, {useContext, createContext, useReducer, useState} from "react";
import reducer from "./operation";
import { initially } from "./initialDate";

const WalletContext = createContext();

export function useData (){
    return useContext(WalletContext);
}

export default function ContextProvider({children}){
    const [state, dispatcher] = useReducer(reducer, initially);
    return (
        <WalletContext.Provider value={{state, dispatcher}}>
            {children}
        </WalletContext.Provider>
    )
}