const {createStore, combineReducers} = require("redux")


//Declare State
const initialProduct = {
    product : ['sugar', 'tea'],
    numOfProduct : 2
}
const initialCart = {
    product : [],
    numOfProduct : 0
}

//Action
const ADD_PRODUCT = 'ADD_PRODUCT';
const ADD_CART = 'ADD_CART';
const addProduct =(productValue) =>{
    return {
        type : ADD_PRODUCT,
        payload : productValue
    }
}
const addCart = (cartValue) =>{
    return {
        type : ADD_CART,
        payload : cartValue
    }
}
//Reducer
const addProductReducer = (state = initialProduct, action) =>{
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                product : [...state.product, action.payload],
                numOfProduct : numOfProduct + 1
            }
        default:
            return state
            break;
    }
}
const addCartReducer = (state = initialCart, action) =>{
        switch (action.type) {
            case ADD_CART :
                return{
                    product : [...state.product, action.payload],
                    numOfProduct : numOfProduct + 1
                }
            default:
                state
                break;
        }
}
//Store
const rootReducer = combineReducers({
    addProduct : addProductReducer,
    addCart : addCartReducer
})
const store = createStore(rootReducer)
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(addProduct('salt'))
store.dispatch(addCart('sugar'))