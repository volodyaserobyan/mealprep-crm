import {
    FETCHBLOG,
    GETARTICLES,
    GETSIMILARARTICLES,
    GETKINDS,
    GETKINDSCOUNT,
    POSTARTICLE,
    DELETEBLOG
} from '../const/ConstTypes'

const INITIAL_STATE = { isFetching: null };

export const blogReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCHBLOG: {
            return {
                ...state,
                isFetching: true
            }
        }
        case GETARTICLES: {
            return {
                ...state,
                getArticles: action.getArticles,
                isFetching: false
            }
        }
        case POSTARTICLE: {
            return {
                ...state,
                postArticles: action.postArticles,
                isFetching: false
            }
        }
        case GETSIMILARARTICLES: {
            return {
                ...state,
                getArticlesSimilar: action.getArticles,
                isFetching: false
            }
        }
        case DELETEBLOG: {
            return {
                ...state,
                deleteBlog: action.deleteBlog,
                isFetching: false
            }
        }
        case GETKINDS: {
            return {
                ...state,
                getKinds: action.getKinds,
                isFetching: false
            }
        }
        case GETKINDSCOUNT: {
            return {
                ...state,
                getKindsCount: action.getKindsCount,
                isFetching: false
            }
        }
        default: return state;
    }
}