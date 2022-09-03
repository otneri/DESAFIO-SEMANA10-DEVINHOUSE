import { useAppContext } from '../../contexts/app-context'
import { CardList } from '../CardList/CardList'
import { Filter } from '../Filter/Filter'
import styles from '../pages/Home/Home.module.css'
import { Summary } from '../Summary/Summary'
import { SummaryCard } from '../SummaryCard/SummaryCard'
import { TipCard } from '../TipCard/TipCard'


export const Main = () => {
    const result = useAppContext();
    console.log(result);
    const umaDica = {
        titulo: 'ajsdasd',
        linguagem:'jasdajs',
        categoria:'sjdfajf',
        video: 'https://www.youtube.com/watch?v=37SwqREHRGI'
    }
    
    return (
        <main className={styles.maincontainer}>
            <SummaryCard/>
            <Filter/>
            <Summary/>
            <CardList>
                <TipCard dica={umaDica}/>
                <TipCard dica={umaDica}/>
                <TipCard dica={umaDica}/>
            </CardList>

        </main>

    )
}