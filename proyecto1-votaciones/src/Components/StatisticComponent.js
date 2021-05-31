import React from 'react'

const Statistics = ({text, value}) =>{

    const myRow = () => {
        return(
            <div>
                <table style={{margin:"auto"}}>
                    <thead>
                        <tr>
                            <th width="50"></th>
                            <th width="200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{textAlign: "left"}}>{text}</td>
                            <td style={{textAlign: "center"}}>{value}</td>
                        </tr>
                    </tbody>
                </table>
                {/* {text === "positive" ? <p>{text} {value}%</p> : <p>{text} {value}</p>} */}
            </div>
        )
    }

    return myRow()
    
}

export default Statistics