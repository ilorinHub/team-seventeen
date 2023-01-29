//@action creators
import * as ActionTypes from './actionTypes'

export const Example = (data) => {
    return ({
        type: ActionTypes.EXAMPLE,
        payload: data
    })
}