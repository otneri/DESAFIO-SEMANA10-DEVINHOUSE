import styles from '../pages/Home/Home.module.css'

import PropType from 'prop-types';
import { CardList } from '../CardList/CardList';

export const TipCard = ({dica}) => {

    return (
        
    <CardList>
            
        <div className={styles.tipcardcontainer}>
            <h2 className={styles.title}>{dica.titulo}</h2>
            <div className={styles.metadata}>
                <div>
                Linguagem: <span className={styles.metaValue}>{dica.linguagem}</span>
                </div>
                <div>
                Categoria: <span className={styles.metaValue}>{dica.categoria}</span>
                </div>
            </div>
            <div className={styles.content}>
                {dica.descricao}
            </div>
            
            {/* condicional video */}
            <div className={styles.content}>
                {dica.video}
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
    </CardList>
        

        
    )
}

TipCard.propTypes = {
    dica : PropType.shape({
        titulo : PropType.string,
        linguagem : PropType.string,
        categoria : PropType.string,
        descricao : PropType.string,
        video : PropType.string
    })
}