import { combineReducers } from 'redux'
import { helpReducer } from './helpReducer'
import { blogReducer } from './blogReducer'

const appReducer = combineReducers({
    helpReducer,
    blogReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'RESET_HELPPOST') {
        state.helpReducer.postCategories = undefined
    }
    return appReducer(state, action)
}

export default rootReducer