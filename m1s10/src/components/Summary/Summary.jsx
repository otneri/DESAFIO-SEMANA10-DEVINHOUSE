import styles from '../pages/Home/Home.module.css'
import { TipCard } from '../TipCard/TipCard'
import PropType from 'prop-types';
import { SummaryCard } from '../SummaryCard/SummaryCard';



export const Summary = () => {

    return (

        <>
        <div className={styles.summarycontainer}>
           <SummaryCard title='Back-end' count='123'/>
           <SummaryCard title='Total' count='12'/>
            
        </div>
        </>
    )
}

Summary.propTypes = {
    title : PropType.string,
    count : PropType.number
}