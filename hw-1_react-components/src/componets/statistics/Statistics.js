import React from 'react';
import statistics from './statistical-data.json'


// const stats = statistics.map(item => Statistics(item))


function Statistics({statistics}){
    return (
        <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
      {statistics.map(item => 
        { 
            //to do pdf => reduce
           return <li class="item" key={item.id} >
          <span class="label">{item.label} </span>
          <span class="percentage">{item.percentage} %</span>
          </li>
        })
      }
  </ul>
</section>
    )
}


export default Statistics;