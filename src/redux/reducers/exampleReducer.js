import * as ActionTypes from '../actions/actionTypes'

const initialState = {
    isLoading: true,
    errMess: null,
    data: true
}

export const Example = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.EXAMPLE:
            return {...state, isLoading: false, errMess:null, data: !state.data}
    default:
        return state
    }
}