import {createStore, combineReducers} from 'redux';
import Reducer from './Reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import FoodOrderReducer from './FoodReducer'

const Rootreducer = combineReducers({
   Count : Reducer,
   Food : FoodOrderReducer
})


export const Store = createStore(Rootreducer, composeWithDevTools())

