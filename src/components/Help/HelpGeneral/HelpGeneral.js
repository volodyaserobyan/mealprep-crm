import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { HELPCENTERCATGURL } from '../../../const/ConstUrl'
import { deleteQuestionsHelpCenter, postCategoriesHelpCenter } from '../../../action/Action'
import { Input } from '../../Form'
import './HelpGeneral.scss'

const HelpGeneral = props => {

    const [id, setId] = useState('')
    const [edit, isEdit] = useState(false)
    const [title, setTitle] = useState('')
    const [answer, setAnswer] = useState('')

    const handleClick = e => {
        console.log(e, 'sss')
        setId(e._id)
    }

    const deleteQuest = id => {
        props.deleteQuestHelp(`${HELPCENTERCATGURL}/questions/${id}`)
    }

    const editQuest = (id, e) => {
        e.preventDefault()

        const sendObj = {
            title: title,
            label: title.split(' ').join('_').toLowerCase(),
            answere: answer
        }

        props.postQuest(`${HELPCENTERCATGURL}/questions/${id}`, sendObj)

    }

    return (
        <section className='HelpGeneral'>
            {props.item.questions.map(item =>
                <div key={item._id}>
                    <div>
                        <h1 onClick={() => handleClick(item)}>
                            {item.title}
                        </h1>
                        <button onClick={() => deleteQuest(item._id)}>Delete</button>
                        <button onClick={() => isEdit(!edit)}>Edit</button>
                        {edit &&
                            <form onSubmit={(e) => editQuest(item._id, e)}>
                                <Input
                                    type='text'
                                    name='question'
                                    placeholder='Question'
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <Input
                                    type='text'
                                    name='answere'
                                    placeholder='Answere'
                                    value={answer}
                                    onChange={e => setAnswer(e.target.value)}
                                />
                                <Input
                                    type='submit'
                                    className="Submit"
                                    value='SAVE'
                                />
                            </form>}
                    </div>
                    {item._id == id &&
                        <p>{item.answere}</p>
                    }
                </div>
            )}
            <Link to={{
                pathname: `${process.env.PUBLIC_URL}/dashboard/addhelp`,
                query: props.id
            }}
            >
                <button>Add Question</button>
            </Link>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteQuestHelp: url => dispatch(deleteQuestionsHelpCenter(url)),
        postQuest: (url, body) => dispatch(postCategoriesHelpCenter(url, body))
    }
}

export default connect(null, mapDispatchToProps)(HelpGeneral)