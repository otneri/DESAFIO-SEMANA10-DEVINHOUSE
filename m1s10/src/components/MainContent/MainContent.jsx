import { useAppContext } from '../../contexts/app-context'
import { Filter } from '../Filter/Filter'
import styles from '../pages/Home/Home.module.css'
import { Summary } from '../Summary/Summary'


export const Main = () => {
    const result = useAppContext();
    console.log(result);

    return (
        <main className={styles.maincontainer}>
            
            <Filter/>
            <Summary/>
        </main>

    )
}