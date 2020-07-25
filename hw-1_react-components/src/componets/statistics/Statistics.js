import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'


// немного запутался в title он в принцыпе есть в секции но тут я сделал div (в задание давалось иначе )


function Statistics({title, statistics}){
  // checking for id 
const stringId = string => isNaN(string) ?  Number(string.slice(3)) : string

    return (
        <div className={styles.statistics}>
          <h2 className={styles.title}>{title}</h2>

          <ul className={styles.statlist}>
            { 
            statistics.map(item => 
                  {
                    //random color 
                    
                    const rgb = 
                    'rgb(' + Math.floor(Math.random()*256) 
                     + ',' + Math.floor(Math.random()*256)
                     + ',' + Math.floor(Math.random()*256) 
                     + ')'
                      
        
                     return <li style={{
                       backgroundColor:rgb}} 
                        className={styles.item} key={stringId(item.id)} >
                        <span className={styles.label}>{item.label} </span>
                        <span className={styles.percentage}>{item.percentage} %</span>
                      </li>
                    
                  })
               }
          </ul>
        </div>
         )
}

Statistics.propTypes={
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
        item:PropTypes.objectOf({
          id:PropTypes.number.isRequired,
          label:PropTypes.string.isRequired,
          percentage:PropTypes.number.isRequired,
      })
    }),
   ).isRequired,
  }


export default Statistics;