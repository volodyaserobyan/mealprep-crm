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
    patchOrderHelpCenter
} from '../../action/Action'
import { HELPCENTERCATGURL } from '../../const/ConstUrl'
import HelpGeneral from './HelpGeneral'
import { Input } from '../Form'
import './Help.scss'

let _ = require('lodash')

const Help = props => {

    const [isAdd, setIsAdd] = useState(false)
    const [order, setOrder] = useState('')
    const [value, setValue] = useState('')

    useEffect(() => {
        props.getCategoriesHelp(HELPCENTERCATGURL)
    }, [
        props.helpDELETECAT,
        props.helpDELETEQUEST,
        props.helpORDER
    ])

    const handleSubmit = (id, e) => {
        e.preventDefault()

        const sendObj = {
            newIndex: value
        }
        props.patchOrderHelp(`${HELPCENTERCATGURL}/${id}/order`, sendObj)
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
                            </div>
                        )}
                    </div>
                    <div className="Help-Cont-Wrap-Context">
                        {props.helpGET.map(item =>
                            props.match.params.id == item._id && <HelpGeneral key={item._id}
                                item={item}
                                id={props.match.params.id} />)}
                    </div>
                </div>
                <button onClick={() => setIsAdd(true)}>Add Help</button>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        helpGET: state.helpReducer.getCategories,
        helpORDER: state.helpReducer.patchOrder,
        helpDELETECAT: state.helpReducer.deleteCategories,
        helpDELETEQUEST: state.helpReducer.deleteQuestions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategoriesHelp: url => dispatch(getCategoriesHelpCenter(url)),
        deleteCategoriesHelp: url => dispatch(deleteCategoriesHelpCenter(url)),
        patchOrderHelp: (url, body) => dispatch(patchOrderHelpCenter(url, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Help)