import {FoodOrder, Reset} from './ActionType'

let initialstate = {
    Food : [],
    Rate : []
}

const FoodOrderReducer = (state = initialstate, action) => {
    switch(action.type) {
        case FoodOrder : return {
            Food : action.payload,
            Rate :  action.Rate ,
        }
        case Reset: return {
            Food : [],
            Rate :  [] 
        }
        default : return state
    }
}

export default FoodOrderReducer;
