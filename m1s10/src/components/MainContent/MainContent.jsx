import { Filter } from '../Filter/Filter'
import styles from '../pages/Home/Home.module.css'
import { Summary } from '../Summary/Summary'


export const Main = () => {
    return (
        <main className={styles.maincontainer}>
            
            <Filter/>
            <Summary/>
        </main>

    )
}