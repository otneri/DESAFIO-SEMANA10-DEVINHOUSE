import styles from '../pages/Home/Home.module.css'

export const Filter = () => {
    return (

        <div className={styles.filtercontainer}>
                <input placeholder="Busque por uma dica..." type="text" className={styles.inputField} />
                <button onClick={(handleOnEnterFilter)=>{}} className={styles.searchButton}>
                Buscar
                </button>
                <button onClick={(handleOnClearFilter) => {}} className={styles.searchButton}>
                Limpar
                </button>
        </div>

    )

}