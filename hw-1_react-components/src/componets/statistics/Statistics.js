import React from 'react';



function Statistics({statistics}){
    return (
        <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
      {statistics.map(item => 
        { 
            //to do pdf => reduce
           return <li className="item" key={item.id} >
          <span className="label">{item.label} </span>
          <span className="percentage">{item.percentage} %</span>
          </li>
        })
      }
  </ul>
</section>
    )
}


export default Statistics;