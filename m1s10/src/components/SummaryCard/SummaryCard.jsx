import styles from '../pages/Home/Home.module.css'
import PropType from 'prop-types'

export const SummaryCard = ({title, count}) => {
    return (
        <>
            <div className={styles.summarycontainer__card}>
                <span className={styles.title}>{title}</span>
                <span className={styles.value}>{count}</span>
            </div>
        </>
    )
}

SummaryCard.propType = {
    title: PropType.string,
    count: PropType.number

}