const {createStore} = require("redux")

const INCREMENT = "INCREMENT"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
const ADD_USER = "ADD_USER" ; 
//state
const myState = {
    user : [],
    count : 0
}

//action
const myFirstAction = (value) =>{
    return {
        type : ADD_USER,
        payload : value
    }
}

const incrementByValue =(value) =>{
    return {
        type : INCREMENT_BY_VALUE,
        payload : value
    }
}
//reducer
const myFirstReducer = (state = myState, action) =>{
        switch (action.type) {
            case ADD_USER:
                return{
                    ...state,
                    user :  [...state.user , action.payload],
                    count : state.count + 1
            }
            case INCREMENT_BY_VALUE :
                return {
                    ...state,
                    count : state.count + action.payload
                }
        }
}

//store
const store = createStore(myFirstReducer)
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(myFirstAction('nasir'))
store.dispatch(myFirstAction('kader'))
store.dispatch(myFirstAction('jamal'))
store.dispatch(myFirstAction('kamal'))
