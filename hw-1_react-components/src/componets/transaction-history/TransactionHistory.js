import React from 'react';
import PropTypes from 'prop-types'
import styles from './TransactionHistory.module.scss'

function UpperCaseFirstWord(word){
  return word.split('')[0].toUpperCase() + word.slice(1)
}

function TransactionHistory({transactions}){
 
  const arrayHistory = transactions.map((transaction,ind) => {
    const styColor  = ind % 2 === 0 ? styles.colorHistory: 0

    return <tr key={transaction.id} className ={styColor}>
              <td className={styles.tdtype}>{UpperCaseFirstWord(transaction.type)}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
           </tr>
})

    return (
        <table className={styles.transaction}>
  <thead >
    <tr>
      <th className={styles.headTest}>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={styles.body}>
      {arrayHistory}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes ={
  transaction:PropTypes.exact({
    type:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired,
    currency:PropTypes.string.isRequired,
  })
}


export default TransactionHistory;