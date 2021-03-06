import * as All from '../const/ConstTypes'

///////////////////////HELP/////////////////////
export const getCategoriesHelpCenter = url => {
    return dispatch => {
        dispatch({
            type: All.FETCHHELP
        });
        return fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(getCategories => {
                dispatch({
                    type: All.GETCATEGORIESHELP,
                    getCategories: getCategories
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORHELP,
                    data: error
                })
            })
    }
}

export const postCategoriesHelpCenter = (url, body, isPatch) => {
    return dispatch => {
        dispatch({
            type: All.FETCHHELP
        });
        return fetch(url, {
            method: isPatch ? 'PATCH' : 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(postCategories => {
                dispatch({
                    type: All.POSTCATEGORIESHELP,
                    postCategories: postCategories
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORHELP,
                    data: error
                })
            })
    }
}

export const deleteCategoriesHelpCenter = url => {
    return dispatch => {
        dispatch({
            type: All.FETCHHELP
        });
        return fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(deleteCategories => {
                dispatch({
                    type: All.DELETECATEGORIESHELP,
                    deleteCategories: deleteCategories
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORHELP,
                    data: error
                })
            })
    }
}

export const patchOrderHelpCenter = (url, body) => {
    return dispatch => {
        dispatch({
            type: All.FETCHHELP
        });
        return fetch(url, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(patchOrder => {
                dispatch({
                    type: All.PATCHORDERHELP,
                    patchOrder: patchOrder
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORHELP,
                    data: error
                })
            })
    }
}

export const resetHelpPost = () => {
    return {
        type: 'RESET_HELPPOST'
    }
}

export const deleteQuestionsHelpCenter = url => {
    return dispatch => {
        dispatch({
            type: All.FETCHHELP
        });
        return fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(deleteQuestions => {
                dispatch({
                    type: All.DELETEQUESTIONSHELP,
                    deleteQuestions: deleteQuestions
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORHELP,
                    data: error
                })
            })
    }
}

/////////////BLOG//////////////////

export const getArticles = (url, isSimilarArticle) => {
    return dispatch => {
        dispatch({
            type: All.FETCHBLOG
        });
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(getArticles => {
                isSimilarArticle ?
                    dispatch({
                        type: All.GETSIMILARARTICLES,
                        getArticlesSimilar: getArticles
                    }) :
                    dispatch({
                        type: All.GETARTICLES,
                        getArticles: getArticles
                    })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORBLOG,
                    data: error
                })
            })
    }
}

export const postArticles = (url, body) => {
    return dispatch => {
        dispatch({
            type: All.FETCHBLOG
        });
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(postArticles => {
                dispatch({
                    type: All.POSTARTICLE,
                    postArticles: postArticles
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORBLOG,
                    data: error
                })
            })
    }
}

export const resetPostArticles = () => {
    return {
        type: All.RESETPOST
    }
}

export const getBlogKinds = url => {
    return dispatch => {
        dispatch({
            type: All.FETCHBLOG
        });
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(getKinds => {
                dispatch({
                    type: All.GETKINDS,
                    getKinds: getKinds
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORBLOG,
                    data: error
                })
            })
    }
}

export const getBlogKindsCount = url => {
    return dispatch => {
        dispatch({
            type: All.FETCHBLOG
        });
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(getKindsCount => {
                dispatch({
                    type: All.GETKINDSCOUNT,
                    getKindsCount: getKindsCount
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORBLOG,
                    data: error
                })
            })
    }
}

export const deleteBlog = url => {
    return dispatch => {
        dispatch({
            type: All.FETCHBLOG
        });
        fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(deleteBlog => {
                dispatch({
                    type: All.DELETEBLOG,
                    deleteBlog: deleteBlog
                })
            })
            .catch(error => {
                dispatch({
                    type: All.ERRORBLOG,
                    data: error
                })
            })
    }
}

export const deleteReset = () => {
    return {
        type: All.RESETDELETE
    }
}