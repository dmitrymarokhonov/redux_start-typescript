import React from 'react'

import { connect } from 'react-redux'

import CounterControl from "../../components/CounterControl/CounterContol"
import CounterOutput from "../../components/CounterOutput/CounterOutput"
import * as actionCreators from "../../store/actions/index";
import { ICounterProps } from "../../intefaces"


class Counter extends React.Component<ICounterProps> {

  public render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store result
        </button>
        <ul>
          {this.props.storedResults.map((strResult: any) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
    onStoreResult: (result: any) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id: any) => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);