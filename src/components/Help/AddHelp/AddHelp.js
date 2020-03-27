import React, {
    useState,
    useEffect
} from 'react'
import { Input } from '../../Form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { postCategoriesHelpCenter } from '../../../action/Action'
import { HELPCENTERCATGURL } from '../../../const/ConstUrl'
import './AddHelp.scss'

let _ = require('lodash')

const AddHelp = props => {

    const [title, setTitle] = useState('')
    const [titleLabel, setTitleLabel] = useState('')
    const [question, setQuestion] = useState('')
    const [questionLabel, setQuestionLabel] = useState('')
    const [answer, setAnswer] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const handelSubmit = e => {
        e.preventDefault()

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

    useEffect(() => {
        if (props.helpPost === 'help categorie created' && _.isEmpty(props.helpGET)) {
            setIsSuccess(true)
        }
    }, [props.helpPost])

    if (isSuccess) {
        return (
            <Redirect to={{
                pathname: `${process.env.PUBLIC_URL}/dashboard/help/${props.help.categories[0]._id}`
            }} />
        )
    }

    return (
        <section className='AddHelp'>
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
        helpPost: state.helpReducer.postCategories != undefined &&
            state.helpReducer.postCategories.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postCategoriesHelp: (url, body) => dispatch(postCategoriesHelpCenter(url, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddHelp)