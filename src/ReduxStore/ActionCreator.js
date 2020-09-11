import {Count, ResetCount, Reset, FoodOrder, CountReduce} from '../ReduxStore/ActionType';


export const NoOfCount = ()=> {
    return {
        type : Count,
    }
}

export const CountReducer = ()=> {
    return {
        type : CountReduce,
    }
}

export const Resetcount = ()=> {
    return {
        type : ResetCount
    }
}

export const ResetData= ()=> {
    return {
        type : Reset
    }
}


export const FoodOrderNames = (data, rate) => {
    return {
        type : FoodOrder,
        payload : data,
        Rate : rate
    }
}