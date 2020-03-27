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
    deleteCategoriesHelpCenter
} from '../../action/Action'
import { HELPCENTERCATGURL } from '../../const/ConstUrl'
import HelpGeneral from './HelpGeneral'
import './Help.scss'

let _ = require('lodash')

const Help = props => {

    const [isAdd, setIsAdd] = useState(false)

    // useEffect(() => {
    //     props.getCategoriesHelp(HELPCENTERCATGURL)
    // }, [])

    useEffect(() => {
        props.getCategoriesHelp(HELPCENTERCATGURL)
    }, [props.helpDELETE])

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
                        {props.helpGET.categories.map(item =>
                            <div key={item._id}>
                                <NavLink to={{
                                    pathname: `${process.env.PUBLIC_URL}/dashboard/help/${item._id}`,
                                }}
                                    activeClassName='isActive'>
                                    <p>{item.title}</p>
                                </NavLink>
                                <button onClick={() => {
                                    props.deleteCategoriesHelp(`${HELPCENTERCATGURL}/${item._id}`)
                                }}>Delete</button>
                            </div>
                        )}
                    </div>
                    <div className="Help-Cont-Wrap-Context">
                        {props.helpGET.categories.map(item =>
                            props.match.params.id == item._id && <HelpGeneral key={item._id} item={item} />)}
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
        helpDELETE: state.helpReducer.deleteCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategoriesHelp: url => dispatch(getCategoriesHelpCenter(url)),
        deleteCategoriesHelp: url => dispatch(deleteCategoriesHelpCenter(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Help)