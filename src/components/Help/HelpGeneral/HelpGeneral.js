import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { HELPCENTERCATGURL } from '../../../const/ConstUrl'
import {
    deleteQuestionsHelpCenter,
    postCategoriesHelpCenter,
    patchOrderHelpCenter
} from '../../../action/Action'
import {
    Input,
    Button
} from '../../Form'
import './HelpGeneral.scss'

const HelpGeneral = props => {

    const [id, setId] = useState({
        id: '',
        isOpen: false
    })
    const [edit, isEdit] = useState({
        id: '',
        isOpen: false
    })
    const [order, setOrder] = useState({
        id: '',
        isActive: false
    })
    const [orderValue, setOrderValue] = useState('')
    const [title, setTitle] = useState('')
    const [answer, setAnswer] = useState('')

    const deleteQuest = id => {
        props.deleteQuestHelp(`${HELPCENTERCATGURL}/questions/${id}`)
    }

    const editQuest = (id, e) => {
        e.preventDefault()
        let sendObj = {}
        if (answer == '') {
            sendObj = {
                title: title,
                label: title.split(' ').join('_').toLowerCase()
            }
        } else if (title == '') {
            sendObj = {
                answere: answer
            }
        } else sendObj = {
            title: title,
            label: title.split(' ').join('_').toLowerCase(),
            answere: answer
        }

        props.postQuest(`${HELPCENTERCATGURL}/questions/${id}`, sendObj, true)
    }

    const changeOrderQuestion = (id, e) => {
        e.preventDefault()

        const sendObj = {
            newIndex: orderValue
        }
        props.patchOrderHelp(`${HELPCENTERCATGURL}/questions/${id}/order`, sendObj)
    }

    return (
        <section className='HelpGeneral'>
            {props.item.questions.map((item, index) =>
                <div className='HelpGeneral-Item' key={item._id}>
                    <div>
                        <h1 onClick={() => setId({ id: item._id, isOpen: !id.isOpen })}>
                            {item.title}
                        </h1>
                        <p onClick={() => setOrder({ id: item._id, isActive: !order.isActive })}>Index` {index}</p>
                        {order.id == item._id && order.isActive &&
                            <form onSubmit={e => changeOrderQuestion(item._id, e)}>
                                <Input
                                    type='text'
                                    name='order'
                                    placeholder='Order'
                                    value={orderValue}
                                    onChange={e => setOrderValue(e.target.value)}
                                />
                                <Input
                                    type='submit'
                                    className="Submit"
                                    value='SAVE'
                                />
                            </form>
                        }
                        {edit.id == item._id && edit.isOpen &&
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
                        <div className='HelpGeneral-Item-Buttons'>
                            <Button
                                value='Delete'
                                onClick={() => deleteQuest(item._id)}
                                className='delete' />
                            <Button
                                value='Edit'
                                onClick={() => isEdit({ id: item._id, isOpen: !edit.isOpen })} />
                        </div>
                    </div>
                    {item._id == id.id && id.isOpen &&
                        <p>{item.answere}</p>
                    }
                </div>
            )}
            <Link to={{
                pathname: `${process.env.PUBLIC_URL}/dashboard/addhelp`,
                query: props.id
            }}
            >
                <Button value='Add Question' />
            </Link>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteQuestHelp: url => dispatch(deleteQuestionsHelpCenter(url)),
        postQuest: (url, body, isPatch) => dispatch(postCategoriesHelpCenter(url, body, isPatch)),
        patchOrderHelp: (url, body) => dispatch(patchOrderHelpCenter(url, body))
    }
}

export default connect(null, mapDispatchToProps)(HelpGeneral)