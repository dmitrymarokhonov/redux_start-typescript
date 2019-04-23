import React from 'react'

const CounterContol = (props:any) => {
  return (
    <div className="CounterControl" onClick={props.clicked}>
        {props.label}
    </div>
  )
}

export default CounterContol
