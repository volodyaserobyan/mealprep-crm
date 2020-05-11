import React from 'react'
import { Route } from 'react-router-dom'
import { Help, AddHelp } from '../Help'
import Blog from '../Blog'
import Meal from '../Meal'
import './Tabs.scss'

const Tabs = () => {

    return (
        <section className='Tabs'>
            <Route path={`${process.env.PUBLIC_URL}/dashboard/help/:id`} component={Help} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/addhelp`} component={AddHelp} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/blog/`} component={Blog} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard/meal`} component={Meal} />
        </section>
    )
}

export default Tabs