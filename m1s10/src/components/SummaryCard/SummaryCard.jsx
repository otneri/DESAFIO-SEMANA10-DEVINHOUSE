import styles from '../pages/Home/Home.module.css'

export const SummaryCard = ({title, coun }) => {

    return (
        
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
    )
}