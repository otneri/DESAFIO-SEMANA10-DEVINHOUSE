import * as React from 'react'
import PropType from 'prop-types';
import { useContext } from 'react';
import { useState } from 'react'

export const Contexto  =  React.createContext()


export const AppContext = ({children}) => {
    const [allTips, setAllTips] = useState([
        {
        titulo: 'ajsdasd',
        linguagem:'jasdajs',
        categoria:'sjdfajf',
        video: 'https://www.youtube.com/watch?v=37SwqREHRGI'
        }

    ]);
    
    const [filter, setFilter] = useState([null])


    const createTip = (tip ) => {
        setAllTips = (pTips => [...pTips , tip] )
    };

    const filterTips = (query) => {
        (query ? setFilter (query) : setFilter(null))
    };
    


    const tips = 
        filter ? allTips.filter(
            tip => tip.titulo.includes(filterTips) 
            ) : allTips;
        
    const filtro = () => {
        null
    }

    return(

        <Contexto.Provider value={{createTip, filterTips, tips}}>
            {children}
        </Contexto.Provider>
        
    )
}

export const useAppContext = () => {
    const contexto = useContext(Contexto);

    return contexto;
};


AppContext.propTypes = {
    children: PropType.node,
}