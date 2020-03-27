import {
    GETCATEGORIESHELP,
    FETCHHELP,
    ERRORHELP,
    POSTCATEGORIESHELP,
    DELETECATEGORIESHELP,
    DELETEQUESTIONSHELP
} from '../const/ConstTypes'

const INITIAL_STATE = {
    isFetching: null,
    error: undefined
};

export const helpReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCHHELP: {
            return {
                ...state,
                isFetching: true
            }
        }
        case GETCATEGORIESHELP: {
            return {
                ...state,
                getCategories: action.getCategories,
                isFetching: false
            }
        }
        case POSTCATEGORIESHELP: {
            return {
                ...state,
                postCategories: action.postCategories,
                isFetching: false
            }
        }
        case DELETECATEGORIESHELP: {
            return {
                ...state,
                deleteCategories: action.deleteCategories,
                isFetching: false
            }
        }
        case DELETEQUESTIONSHELP: {
            return {
                ...state,
                deleteQuestions: action.deleteQuestions,
                isFetching: false
            }
        }
        case ERRORHELP: {
            return {
                ...state,
                error: action.data,
                isFetching: false
            }
        }
        default: return state;
    }
}