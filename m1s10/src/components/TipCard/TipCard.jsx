import styles from '../pages/Home/Home.module.css'

import PropType from 'prop-types';
import { CardList } from '../CardList/CardList';

export const TipCard = ({dica}) => {
    const {titulo,linguagem, categoria, descricao,video} = dica
    

    return (
        
    
            
    <div className={styles.tipcardcontainer}>
        <h2 className={styles.title}>{titulo}</h2>
        <div className={styles.metadata}>
            <div>
            Linguagem: <span className={styles.metaValue}>{linguagem}</span>
            </div>
            <div>
            Categoria: <span className={styles.metaValue}>{categoria}</span>
            </div>
        </div>
        <div className={styles.content}>
            {descricao}
        </div>
        
        {video && (
            <a 
            href={video}
            target='_blank'
            className={styles.btnprimary} 
            type="submit"
            >
            YouTube
            </a>
        )}
        
        <div className={styles.btngroup}>
            <button className={styles.btnprimary} type="submit">
            editar
            </button>
            {

            }
            
            <button className={styles.btnsecondary} type="submit">
            apagar
            </button>
        </div>
    </div>
    
        

        
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