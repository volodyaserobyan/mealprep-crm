import React, { useEffect } from 'react'
import { Button } from '../Form'
import { connect } from 'react-redux'
import {
    getArticles,
    getBlogKinds,
    getBlogKindsCount
} from '../../action/Action'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { BLOGURL } from '../../const/ConstUrl'
import classNames from 'classnames'
import Item from './Item'
import './Blog.scss'

let _ = require('lodash')

const Blog = props => {

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
    }, [props.kinds])

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
        _.isEmpty(props.kindsCount)) {
        return (<div>Loading...</div>)
    }

    return (
        <section className='Blog'>
            <nav>
                <h1>Blog</h1>
                <Button
                    value='Add Blog'
                    className='addblog' />
            </nav>
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
                <button>Load More articles</button>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.blogReducer.isFetching,
        articles: state.blogReducer.getArticles,
        kinds: state.blogReducer.getKinds,
        kindsCount: state.blogReducer.getKindsCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArticles: (url, bool) => dispatch(getArticles(url, bool)),
        getKinds: url => dispatch(getBlogKinds(url)),
        getKindsCount: url => dispatch(getBlogKindsCount(url))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Blog)
