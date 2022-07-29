const {createStore} = require("redux")


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