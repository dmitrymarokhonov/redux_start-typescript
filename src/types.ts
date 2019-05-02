export type Result = {
  id: string,
  value: number
}
export type State = {
  ctr: {
    counter: number
  }
  res: {
    results: Array<Result>
  }
}

export type InnerState  =  {
  counter?: number | any
  results?: Array<Result> | any
}
