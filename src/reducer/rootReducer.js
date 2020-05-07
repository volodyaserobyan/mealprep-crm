import { combineReducers } from 'redux'
import { helpReducer } from './helpReducer'

const appReducer = combineReducers({
    helpReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'RESET_HELPPOST') {
        state.helpReducer.postCategories = undefined
    }
    return appReducer(state, action)
}

export default rootReducer