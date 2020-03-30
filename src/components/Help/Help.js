import React, {
    useEffect,
    useState
} from 'react'
import {
    NavLink,
    Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import {
    getCategoriesHelpCenter,
    deleteCategoriesHelpCenter,
    patchOrderHelpCenter,
    postCategoriesHelpCenter
} from '../../action/Action'
import { HELPCENTERCATGURL } from '../../const/ConstUrl'
import HelpGeneral from './HelpGeneral'
import { Input } from '../Form'
import './Help.scss'

let _ = require('lodash')

const Help = props => {

    const [isAdd, setIsAdd] = useState(false)
    const [catId, setCatId] = useState('')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [order, setOrder] = useState('')
    const [value, setValue] = useState('')
    const [categoryValue, setCategoryValue] = useState('')

    useEffect(() => {
        props.getCategoriesHelp(HELPCENTERCATGURL)
    }, [
        props.helpDELETECAT,
        props.helpDELETEQUEST,
        props.helpORDER,
        props.helpPOST
    ])

    const handleSubmit = (id, e) => {
        e.preventDefault()

        const sendObj = {
            newIndex: value
        }
        props.patchOrderHelp(`${HELPCENTERCATGURL}/${id}/order`, sendObj)
    }

    const changeTitle = (id, e) => {
        e.preventDefault()

        const sendObj = {
            title: categoryValue,
            label: categoryValue.split(' ').join('_').toLowerCase()
        }
        props.patchCategories(`${HELPCENTERCATGURL}/${id}`, sendObj, true)
    }

    if (isAdd) {
        return (
            <Redirect to={{
                pathname: `${process.env.PUBLIC_URL}/dashboard/addhelp`
            }} />
        )
    }

    return (
        <section className="Help">
            <div className="Help-Cont innerWrap">
                <h1 className="Help-Cont-Title">Help Center</h1>
                <div className="Help-Cont-Wrap">
                    <div className="Help-Cont-Wrap-Menu">
                        {props.helpGET.map(item =>
                            <div key={item._id}>
                                <NavLink to={{
                                    pathname: `${process.env.PUBLIC_URL}/dashboard/help/${item._id}`,
                                }}
                                    activeClassName='isActive'>
                                    <p>{item.title}</p>
                                    <p onClick={() => setOrder(item._id)}>{item.orderIndex}</p>
                                </NavLink>
                                {order == item._id &&
                                    <form onSubmit={e => handleSubmit(item._id, e)}>
                                        <Input
                                            type='text'
                                            name='order'
                                            placeholder='Order'
                                            value={order.value}
                                            onChange={e => {
                                                console.log(e.target.value)
                                                setValue(e.target.value)
                                            }} />
                                        <Input
                                            type='submit'
                                            className="Submit"
                                            value='ADD' />
                                    </form>}
                                <button onClick={() => {
                                    props.deleteCategoriesHelp(`${HELPCENTERCATGURL}/${item._id}`)
                                }}>Delete</button>
                                <button onClick={() => {
                                    setIsOpenModal(true)
                                    setCatId(item._id)
                                }}>Edit</button>
                            </div>
                        )}
                    </div>
                    <div className="Help-Cont-Wrap-Context">
                        {props.helpGET.map(item =>
                            props.match.params.id == item._id && <HelpGeneral key={item._id}
                                item={item}
                                id={props.match.params.id} />)}
                    </div>
                    {isOpenModal &&
                        <form className='modal' onSubmit={e => changeTitle(catId, e)}>
                            <div>
                                <Input
                                    type='text'
                                    name='title'
                                    placeholder='Title'
                                    value={categoryValue}
                                    onChange={e => setCategoryValue(e.target.value)} />
                                <Input
                                    type='submit'
                                    className="Submit"
                                    value='Change' />
                            </div>
                        </form>}
                </div>
                <button onClick={() => setIsAdd(true)}>Add Help</button>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        helpGET: state.helpReducer.getCategories,
        helpPOST: state.helpReducer.postCategories,
        helpORDER: state.helpReducer.patchOrder,
        helpDELETECAT: state.helpReducer.deleteCategories,
        helpDELETEQUEST: state.helpReducer.deleteQuestions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategoriesHelp: url => dispatch(getCategoriesHelpCenter(url)),
        deleteCategoriesHelp: url => dispatch(deleteCategoriesHelpCenter(url)),
        patchOrderHelp: (url, body) => dispatch(patchOrderHelpCenter(url, body)),
        patchCategories: (url, body, isPatch) => dispatch(postCategoriesHelpCenter(url, body, isPatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Help)