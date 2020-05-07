import React, {
    useState,
    useEffect
} from 'react'
import { Input } from '../../Form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { postCategoriesHelpCenter, resetHelpPost } from '../../../action/Action'
import { HELPCENTERCATGURL } from '../../../const/ConstUrl'
import './AddHelp.scss'

let _ = require('lodash')

const AddHelp = props => {

    const [title, setTitle] = useState('')
    const [titleLabel, setTitleLabel] = useState('')
    const [question, setQuestion] = useState('')
    const [questionLabel, setQuestionLabel] = useState('')
    const [answer, setAnswer] = useState('')
    const [id, setId] = useState(props.location.query)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const getTitle = () => {
        props.helpGET.map(item => {
            if (props.location.query == item._id) {
                setTitle(item.title)
                setTitleLabel(item.title.split(' ').join('_').toLowerCase())
            }
        })
    }
    title == '' && getTitle()

    const handelSubmit = e => {
        e.preventDefault()

        if (id == undefined) {
            const sendObj = {
                title: title,
                label: titleLabel,
                questions: [
                    {
                        title: question,
                        label: questionLabel,
                        answere: answer
                    }
                ]
            }
            props.postCategoriesHelp(HELPCENTERCATGURL, sendObj)
        }
        else {
            const sendObj = {
                title: question,
                answere: answer,
                label: questionLabel
            }
            props.postCategoriesHelp(`${HELPCENTERCATGURL}/${id}/questions`, sendObj)
        }
    }

    useEffect(() => {
        if (!_.isEmpty(props.helpGET) && !_.isEmpty(props.helpPost)) {
            if (props.helpPost.error_code == undefined) {
                setIsSuccess(true)
            } else {
                setErrorMessage(props.helpPost.message)
            }
        }
    }, [props.helpPost])

    useEffect(() => {
        return () => props.reset()
    })

    if (isSuccess) {
        return (
            <Redirect to={{
                pathname: `${process.env.PUBLIC_URL}/dashboard/help/${props.helpGET[0]._id}`
            }} />
        )
    }

    return (
        <section className='AddHelp'>
            {errorMessage !== '' && <p>{errorMessage}</p>}
            <form onSubmit={handelSubmit}>
                <Input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={title}
                    onChange={e => {
                        setTitle(e.target.value)
                        let label = e.target.value.split(' ').join('_')
                        setTitleLabel(label.toLowerCase())
                    }} />
                <Input
                    type='text'
                    name='title'
                    placeholder='Title-label'
                    value={titleLabel}
                    onChange={e => setTitleLabel(e.target.value.split(' ').join('_').toLowerCase())} />
                <Input
                    type='text'
                    name='question'
                    placeholder='Question'
                    value={question}
                    onChange={e => {
                        setQuestion(e.target.value)
                        let label = e.target.value.split(' ').join('_')
                        setQuestionLabel(label.toLowerCase())
                    }} />
                <Input
                    type='text'
                    name='title'
                    placeholder='Question-label'
                    value={questionLabel}
                    onChange={e => setQuestionLabel(e.target.value.split(' ').join('_').toLowerCase())} />
                <Input
                    type='text'
                    name='answer'
                    placeholder='Answeer'
                    value={answer}
                    onChange={e => setAnswer(e.target.value)} />
                <Input
                    type='submit'
                    className="Submit"
                    value='ADD'
                />
            </form>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        helpGET: state.helpReducer.getCategories,
        helpPost: state.helpReducer.postCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postCategoriesHelp: (url, body) => dispatch(postCategoriesHelpCenter(url, body)),
        reset: () => dispatch(resetHelpPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddHelp)