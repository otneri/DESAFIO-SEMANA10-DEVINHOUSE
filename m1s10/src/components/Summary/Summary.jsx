import styles from '../pages/Home/Home.module.css'
import { TipCard } from '../TipCard/TipCard'
import PropType from 'prop-types';
import { SummaryCard } from '../SummaryCard/SummaryCard';
import { useAppContext } from '../../contexts/app-context';



export const Summary = () => {
    const {categories} = useAppContext()
    return (
        <div className={styles.summarycontainer}>
        {categories.map((category, index) =>(
           <SummaryCard key={index} title={category.title} count={category.count}/>
        ))}
          
        </div>
        
    )
}

Summary.propTypes = {
    title : PropType.string,
    count : PropType.number
}