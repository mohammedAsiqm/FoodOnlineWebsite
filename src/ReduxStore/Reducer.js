import {Count,ResetCount, CountReduce} from './ActionType'


let initialstate = {
    NoOfCount : 0,
}

const Reducer = (state = initialstate, action) => {
    switch(action.type) {
        case Count : return {
            NoOfCount : state.NoOfCount + 1 ,
        }
        case CountReduce : return {
            NoOfCount : state.NoOfCount - 1 ,
        }
        case ResetCount : return {
            NoOfCount : 0
        }
        default : return state
    }
}

export default Reducer;
