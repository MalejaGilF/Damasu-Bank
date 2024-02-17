import { createAction, props } from "@ngrx/store"

export const setBalance = createAction(
    "[Balance] Set Balance",
    props<{value:number}>()
  )

  export const setBalancepse = createAction(
    "[Balance] Set Balancepse",
    props<{value:number}>()
  )