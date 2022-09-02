import styles from '../pages/Home/Home.module.css'
import { TipCard } from '../TipCard/TipCard'
import PropType from 'prop-types';



export const Summary = ({title, count}) => {

    return (

        <>
        <div className={styles.summarycontainer}>
            <div className={styles.summarycontainer__card}>
            <span className={styles.title}>total</span>
            <span className={styles.value}>{count}</span>
            </div>
            <div className={styles.summarycontainer__card}>
            <span className={styles.title}>back-end</span>
            <span className={styles.value}>{count}</span>
            </div>
            <div className={styles.summarycontainer__card}>
            <span className={styles.title}>soft-skill</span>
            <span className={styles.value}>{count}</span>
            </div>
            <div className={styles.summarycontainer__card}>
            <span className={styles.title}>full-stack</span>
            <span className={styles.value}>{count}</span>
            </div>
        
            
        </div>
        <TipCard dica={{titulo : 'asjsjas',
                        linguagem : 'Kfasdjaksf',
                        categoria : 'sjdfjah',
                        descricao : 'loremasdnasdkaenan',
                        video: 'sdjfdsjfsf'}}/>
        <TipCard dica={{titulo : 'asjsjas',
                        linguagem : 'Kfasdjaksf',
                        categoria : 'sjdfjah',
                        descricao : 'loremasdnasdkaenan',
                        video: 'sdjfdsjfsf'}}/>
        <TipCard dica={{titulo : 'asjsjas',
                        linguagem : 'Kfasdjaksf',
                        categoria : 'sjdfjah',
                        descricao : 'loremasdnasdkaenan',
                        video: 'sdjfdsjfsf'}}/>
        
        </>
    )
}

Summary.propTypes = {
    title : PropType.string,
    count : PropType.number
}