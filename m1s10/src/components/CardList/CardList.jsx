import PropTypes from 'prop-types';
import styles from '../pages/Home/Home.module.css'

export const CardList = ( { children } ) => { 
    return ( 
        <div className={styles.cardList}>
            {children}
        </div>  
    )
  }

  CardList.propTypes = {
    children: PropTypes.node,
  };