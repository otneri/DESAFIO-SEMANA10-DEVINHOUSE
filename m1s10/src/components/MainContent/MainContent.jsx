import styles from '../pages/Home/Home.module.css'

export const Main = () => {
    return (
        <main className={styles.maincontainer}>

            <div className={styles.summarycontainer}>
                <div className={styles.summarycontainer__card}>
                <span className={styles.title}>total</span>
                <span className={styles.value}>1</span>
                </div>
                <div className={styles.summarycontainer__card}>
                <span className={styles.title}>back-end</span>
                <span className={styles.value}>1</span>
                </div>
                <div className={styles.summarycontainer__card}>
                <span className={styles.title}>soft-skill</span>
                <span className={styles.value}>1</span>
                </div>
                <div className={styles.summarycontainer__card}>
                <span className={styles.title}>full-stack</span>
                <span className={styles.value}>1</span>
                </div>
            </div>

    
            <div className={styles.filtercontainer}>
                <input placeholder="Busque por uma dica..." type="text" className={styles.inputField} />
                <button onClick={(handleOnEnterFilter)=>{}} className={styles.searchButton}>
                Buscar
                </button>
                <button onClick={(handleOnClearFilter) => {}} className={styles.searchButton}>
                Limpar
                </button>
            </div>

    
            <div className={styles.cardList}>
            
                <div className={styles.tipcardcontainer}>
                <h2 className={styles.title}>Título da dica</h2>
                <div className={styles.metadata}>
                    <div>
                    Linguagem: <span className={styles.metaValue}>JavaScript</span>
                    </div>
                    <div>
                    Categoria: <span className={styles.metaValue}>Front End</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt harum et velit, eveniet molestiae
                    est repellat dicta hic aspernatur officiis beatae aliquid itaque sit aut nulla error culpa ratione?
                </div>
                <div className={styles.btngroup}>
                    <button className={styles.btnprimary} type="submit">
                    editar
                    </button>
                    <button className={styles.btnsecondary} type="submit">
                    YouTube
                    </button>
                    <button className={styles.btnsecondary} type="submit">
                    apagar
                    </button>
                </div>
            </div>
            </div>
        </main>

    )
}