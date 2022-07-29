/* 
1) state - count: 0
2) action - increment, decrement, reset
3) reducer
4) store
*/
const {createStore} = require("redux");
const INCREMENT = "INCREMENT"
const ADD_NAME = "ADD_NAME"
//state
const initialState = {
    name : [],
    count : 0,
}
//action
const addName =(value) =>{
    return {
        type : ADD_NAME,
        payload : value
    }
}
const incrementAction = () =>{
    return {
        type : INCREMENT
    }
}
//reducer
const myReducer = (state = initialState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count : state.count + 1
            }
        case ADD_NAME :
            return {
                ...state,
                count : state.count + 1,
                name : state.name + action.payload
            }
    }

}

//store
const store = createStore(myReducer)
store.subscribe(()=>{
    console.log(store.getState());
})
 store.dispatch(addName('Alhamdulillah, Bismillah'))
 