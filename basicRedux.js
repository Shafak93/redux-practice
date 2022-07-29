/* 
1) state - count: 0
2) action - increment, decrement, reset
3) reducer
4) store
*/
const  { createStore } = require("redux") 
const  INCREMENT = "INCREMENT"
const  DECREMENT = "DECREMENT"
const  RESET = "RESET"
//1. state
const initialState = {
    count : 0
}

//2. action
const incrementAction = () =>{
    return {
        type : INCREMENT
    }
}
const decrementAction = () =>{
    return {
        type : DECREMENT
    }
}
const resetAction = () =>{
    return {
        type : RESET
    }
}

//3. Reducer
const counterReducer = (state = initialState, action) =>{
        switch (action.type) {
            case INCREMENT:
                return{
                    ...state,
                    count : state.count + 1,
                }
            case DECREMENT:
                return{
                    ...state,
                    count : state.count - 1,
                }
            case RESET:
                return{
                    ...state,
                    count : 0,
                }
            default:
                state;
        }
}

//4. Store
const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())