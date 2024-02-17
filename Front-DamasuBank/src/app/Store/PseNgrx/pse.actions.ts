import { createAction, props } from "@ngrx/store"

export const setPse = createAction(
    "[Pse] Set Pse",
    props<{value:number}>()
  )