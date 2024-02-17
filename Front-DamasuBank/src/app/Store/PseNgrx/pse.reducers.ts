import { createReducer, on } from "@ngrx/store"
import { setPse } from "./pse.actions"

//const initState: number=0;
let initState : any = []
const balance= "valorBalance"
const localStorageInfo: any = () => {
  if (typeof window !== 'undefined') {

    // const navigation = new Router();

    if (localStorage.getItem("valorBalance")) {
      const data = localStorage.getItem("valorBalance")
      initState.push(data)
      return true;
    } else {
      // navigation.navigate(["/Home"]);
      return false;
    }
  } else {
    console.log("I'm in the server side ")
    return false
  }
}
//const localStorageInfo = localStorage.getItem(balance)
//const initState: number = localStorageInfo ? JSON.parse(localStorageInfo) : []

export const pseReducer = createReducer(
  initState,
  on(setPse, (oldState, { value }) => {
    const newState = value
    localStorage.setItem(balance, JSON.stringify(newState))
    return newState
  })
)
