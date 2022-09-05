import { useAppContext } from '../../contexts/app-context'
import { CardList } from '../CardList/CardList'
import { Filter } from '../Filter/Filter'
import styles from '../pages/Home/Home.module.css'
import { Summary } from '../Summary/Summary'
import { SummaryCard } from '../SummaryCard/SummaryCard'
import { TipCard } from '../TipCard/TipCard'


export const Main = () => {
    const { tips } = useAppContext();
    console.log(tips);
    
    return (
        <main className={styles.maincontainer}>
            <SummaryCard/>
            <Filter/>
            <Summary/>
            <CardList>
                {tips.map((tip, index) =>
                     <TipCard key={index} tip={tip} />
                )}
            </CardList>

        </main>

    )
}

