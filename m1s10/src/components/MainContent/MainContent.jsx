import styles from '../pages/Home/Home.module.css'
import { Summary } from '../Summary/Summary'
import { SummaryCard } from '../SummaryCard/SummaryCard'

export const Main = () => {
    return (
        <main className={styles.maincontainer}>

            

    
            <div className={styles.filtercontainer}>
                <input placeholder="Busque por uma dica..." type="text" className={styles.inputField} />
                <button onClick={(handleOnEnterFilter)=>{}} className={styles.searchButton}>
                Buscar
                </button>
                <button onClick={(handleOnClearFilter) => {}} className={styles.searchButton}>
                Limpar
                </button>
            </div>

            <Summary/>
            
    
        </main>

    )
}