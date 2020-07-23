import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'


// немного запутался в title он в принцыпе есть в секции но тут я сделал div (в задание давалось иначе )


function Statistics({title,statistics}){

    return (
        <div className={styles.statistics}>
          <h2 className={styles.title}>{title}</h2>

          <ul className={styles.statlist}>
            { statistics.filter((item,ind,arr) => arr.indexOf(item.label) !== -ind 
              ? item
              : 0)
              .map(item => 
                  {
                    //random color 
                    const rgb = 
                    'rgb(' + Math.floor(Math.random()*256) 
                     + ',' + Math.floor(Math.random()*256)
                     + ',' + Math.floor(Math.random()*256) 
                     + ')'

                     return <li style={{
                       backgroundColor:rgb}} 
                        className={styles.item} key={item.id} >
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
    PropTypes.exact({
      id:PropTypes.string.isRequired,
      label:PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired,
    }),
   ).isRequired,
  }


export default Statistics;