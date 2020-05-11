import React, {
    useEffect,
    useState
} from 'react'
import { Button } from '../Form'
import { connect } from 'react-redux'
import {
    getArticles,
    getBlogKinds,
    getBlogKindsCount,
    deleteReset
} from '../../action/Action'
import { withRouter } from 'react-router-dom'
import { BLOGURL } from '../../const/ConstUrl'
import AddBlog from './AddBlog'
import { compose } from 'recompose'
import Item from './Item'
import './Blog.scss'

let _ = require('lodash')

const Blog = props => {

    const [isAddBlog, setIsAddBlog] = useState(false)

    useEffect(() => {
        props.getArticles(`${BLOGURL}/articles`)
        props.getKinds(`${BLOGURL}/article-kinds`)
    }, [])

    useEffect(() => {
        if (props.kinds != undefined) {
            const kinds = []
            for (let i = 0; i < props.kinds.length; i++) {
                kinds.push(props.kinds[i].name)
            }
            const sendObj = JSON.stringify(kinds)
            props.getKindsCount(`${BLOGURL}/article-kinds/counts?kinds=${sendObj}`)
        }
        if (props.deleteArticle != undefined || props.postArticle != undefined) {
            props.getArticles(`${BLOGURL}/articles`)
            setIsAddBlog(false)
        }
    }, [props.kinds, props.deleteArticle, props.postArticle])

    useEffect(() => {
        if (props.articles != undefined) {
            props.resetDelete()
        }
    }, [props.articles])

    const hanndleKinds = item => {
        props.history.push(item)
        if (item != 'all') {
            const kinds = [item]
            props.getArticles(`${BLOGURL}/articles/?kinds=${JSON.stringify(kinds)}`)
        }
        else {
            props.getArticles(`${BLOGURL}/articles`)
        }
    }

    if (_.isEmpty(props.articles) ||
        _.isEmpty(props.kinds) ||
        _.isEmpty(props.kindsCount) ||
        props.isFetching) {
        return (<div>Loading...</div>)
    }

    return (
        <section className='Blog'>
            <nav>
                <h1>Blog</h1>
                <Button
                    value='Add Blog'
                    className='addblog'
                    onClick={() => setIsAddBlog(true)} />
            </nav>
            {isAddBlog && <AddBlog />}
            <div className="Blog-Cont">
                <div className="Blog-Cont-Title">
                    <div className="Blog-Cont-Title_content">
                        <div
                            className={window.location.href.includes('all') && 'isActiveBlog'}
                            onClick={() => hanndleKinds('all')}>
                            <p>({props.articles.articles.length})</p>
                            <p>All Articles</p>
                        </div>
                        {props.kinds.map(item =>
                            Object.keys(props.kindsCount).map(count =>
                                item.name == count &&
                                <div
                                    onClick={() => hanndleKinds(item.name)}
                                    key={item._id}
                                    className={window.location.href.includes(item.name) && 'isActiveBlog'}>
                                    <p>({props.kindsCount[count]})</p>
                                    <p>{item.name}</p>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="Blog-Cont-Wrap">
                    {props.articles.articles.map(item =>
                        <Item key={item._id} item={item} />
                    )}
                </div>
                <button className='Blog-Cont-Button'>Load More articles</button>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.blogReducer.isFetching,
        articles: state.blogReducer.getArticles,
        postArticle: state.blogReducer.postArticles,
        kinds: state.blogReducer.getKinds,
        kindsCount: state.blogReducer.getKindsCount,
        deleteArticle: state.blogReducer.deleteBlog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArticles: (url, bool) => dispatch(getArticles(url, bool)),
        getKinds: url => dispatch(getBlogKinds(url)),
        getKindsCount: url => dispatch(getBlogKindsCount(url)),
        resetDelete: () => dispatch(deleteReset)
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Blog)
