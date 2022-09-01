
import styles from './Home.module.css'

import logo from '../../../assets/img/icone.png'
import deletar from '../../../assets/img/deletar-lixeira.png'
import editar from '../../../assets/img/editar.png'
import youtube from '../../../assets/img/youtube.png'
import excluir from '../../../assets/img/excluir.png'
import lupa from '../../../assets/img/lupa.png'
import { Sidebar } from '../../Sidebar/Sidebar'
import { Main } from '../../MainContent/MainContent'



export const Home = () =>{

    return(
    <body className={styles.root}>
         <div className={styles.rootcontainer}>
        
            <Sidebar/>
            <Main/>
       
         </div>
    </body>

    )
}