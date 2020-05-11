import React, {
    useState,
    useEffect
} from 'react'
import { Input } from '../../Form'
import { connect } from 'react-redux'
import {
    postArticles,
    resetPostArticles
} from '../../../action/Action'
import { BLOGURL } from '../../../const/ConstUrl'
import { Redirect } from 'react-router-dom'
import './AddBlog.scss'

let _ = require('lodash')

const AddBlog = props => {
    const [title, setTitle] = useState('')
    const [label, setLabel] = useState('')
    const [desc, setDesc] = useState('')
    const [kinds, setKinds] = useState('')
    const [tags, setTags] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const kindArr = kinds.split(" ")
        const tagsArr = tags.split(" ")
        const sendObj = {
            title: title,
            label: label,
            desc: desc,
            kinds: kindArr,
            tags: tagsArr
        }
        props.postArticle(`${BLOGURL}/articles`, sendObj)
    }

    useEffect(() => {
        if (props.articlesPOST != undefined) {
            if (props.articlesPOST.error_code === undefined) {
                alert("SUCCESS")
            }
        }
    }, [props.articlesPOST])

    useEffect(() => {
        return () => props.resetPost()

    })

    if (!_.isEmpty(props.articlesPOST) && props.articlesPOST.error_code === undefined) {
        return (
            <Redirect to={{
                pathname: `${process.env.PUBLIC_URL}/dashboard/blog/all`
            }} />
        )
    }

    return (
        <section className='AddBlog'>
            {!_.isEmpty(props.articlesPOST) && props.articlesPOST.error_code != undefined && <p>{props.articlesPOST.message}</p>}
            <form onSubmit={handleSubmit} className='AddBlog-Cont'>
                <Input
                    type='text'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title' />
                <Input
                    type='text'
                    onChange={e => setLabel(e.target.value)}
                    value={label}
                    placeholder='Label' />
                <Input
                    type='text'
                    onChange={e => setDesc(e.target.value)}
                    value={desc}
                    placeholder='Description' />
                <Input
                    type='text'
                    onChange={e => setKinds(e.target.value)}
                    value={kinds}
                    placeholder='Enter Kinds with SPACE' />
                <Input
                    type='text'
                    value={tags}
                    onChange={e => setTags(e.target.value)}
                    placeholder='Enter Tags with SPACE' />
                <Input
                    type='submit'
                    className='Submit' />
            </form>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.blogReducer.isFetching,
        articlesPOST: state.blogReducer.postArticles,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postArticle: (url, body) => dispatch(postArticles(url, body)),
        resetPost: () => dispatch(resetPostArticles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog)