import React from "react"
import "./CounterContol.css"

type CounterControlProps = {
  label: string
  clicked: any
}

const CounterContol = (props:CounterControlProps) => {
  console.log(props);
  return (
    <div className="CounterControl" onClick={props.clicked}>
        {props.label}
    </div>
  )
}

export default CounterContol
