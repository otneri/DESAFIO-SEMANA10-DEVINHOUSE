import { useAppContext } from '../../contexts/app-context'
import styles from '../pages/Home/Home.module.css'

export const Filter = () => {
    const {filterTips } = useAppContext();


    return (

        <div className={styles.filtercontainer}>
                <input 
                placeholder="Busque por uma dica..." 
                type="text" 
                className={styles.inputField}
                onChange={(e)=> filterTips(e.target.value)} />
                <button className={styles.searchButton}>
                Buscar
                </button>
                <button className={styles.searchButton}>
                Limpar
                </button>
        </div>

    )

}