import React from 'react'
import Statistic from './StatisticComponent'

const Statistics = ({good, neutral, bad, all, porcentaje, promedio}) =>{
    return(
        <div style={{width: "500px", height: "200px", margin: "auto"}}>
            <Statistic text="good" value={good}/>
            <Statistic text="neutral" value={neutral}/>
            <Statistic text="bad" value={bad}/>
            <Statistic text="all" value={all}/>
            <Statistic text="average" value={porcentaje}/>
            <Statistic text="positive" value={promedio}/>
        </div>
       
        
    )
}

export default Statistics