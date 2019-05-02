import React from 'react'
import "./CounterOutput.css"

type CounterOutputProps = {
  value: number
}

const CounterOutput = (props: CounterOutputProps) => {
  return (
    <div className="CounterOutput">
      Current Counter: {props.value}
    </div>
  )
}

export default CounterOutput
