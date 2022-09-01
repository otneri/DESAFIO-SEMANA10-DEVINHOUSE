import styles from '../pages/Home/Home.module.css'
import { SummaryCard } from '../SummaryCard/SummaryCard'
import Proptypes from 'prop-types'


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
        <SummaryCard title= {title}/>
        </>
    )
}

Summary.propTypes = {
    title : Proptypes.string,
    count : Proptypes.number
}