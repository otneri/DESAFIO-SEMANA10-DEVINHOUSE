import * as React from 'react'
import { useContext } from 'react';
import { useState } from 'react'

export const Contexto  =  React.createContext()

export const AppContext = ({children}) => {

    // const [algo, setAlgo] = useState([]);


    return(

        <Contexto.Provider value={'conectado!'}>
            {children}
        </Contexto.Provider>
        
    )
}

export const useAppContext = () => {
    const contexto = useContext(Contexto);

    return contexto;
};