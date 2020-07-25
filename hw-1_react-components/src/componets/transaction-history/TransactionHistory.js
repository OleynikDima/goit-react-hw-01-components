import React from 'react';
import PropTypes from 'prop-types'
import styles from './TransactionHistory.module.scss'


// функция возвращает елемент с большой буквы 
function UpperCaseFirstWord(word){
  return word.split('')[0].toUpperCase() + word.slice(1)
}


function TransactionHistory({transactions}){
 
  const arrayHistoryRow = transactions.map((transaction,ind) => {
    // чередуем стиль каждой строки 
     const styColor  = ind % 2 !== 0 ? styles.colorHistory: 0

    // возвращает  row
    return <tr key={transaction.id} className ={styColor}>
              <td className={styles.tdtype}>{UpperCaseFirstWord(transaction.type)}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
           </tr>
})
  // возвращаем таблицу
    return (
        <table className={styles.transaction}>
  <thead >
    <tr>
      <th className={styles.headTest}>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody >
      {arrayHistoryRow}
  </tbody>
</table>
    )
}


// PropTypes
TransactionHistory.propTypes ={
  transaction:PropTypes.shape({
    type:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired,
    currency:PropTypes.string.isRequired,
  })
}


export default TransactionHistory;