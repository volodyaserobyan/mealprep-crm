import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './Aside.scss'

const Aside = props => {
    return (
        <section className='Aside'>
            <div className='Aside-Cont'>
                <ul>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/help/${props.help.categories[0]._id}`
                    }}>
                        <li>Help</li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/blog`
                    }}>
                        <li>Blog</li>
                    </NavLink>
                    <NavLink to={{
                        pathname: `${process.env.PUBLIC_URL}/dashboard/meal`
                    }}>
                        <li>Meal</li>
                    </NavLink>
                </ul>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        help: state.helpReducer.getCategories
    }
}

export default connect(mapStateToProps)(Aside)