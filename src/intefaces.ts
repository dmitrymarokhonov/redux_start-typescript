export interface ICounterProps {
  ctr: any
  onIncrementCounter: any
  onDecrementCounter: any
  onAddCounter: any
  onSubtractCounter: any
  onStoreResult: any
  storedResults: any
  onDeleteResult: any
}

export interface ICounterStateFromProps {
  ctr: number,
  storedResults: number[] | number
}

