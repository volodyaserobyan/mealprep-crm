import React from 'react'
import Aside from '../Aside'
import Tabs from '../Tabs'
import './Dashboard.scss'

const Dashboard = () => {

    return (
        <section className='Dashboard'>
            <div className='Dashboard-Cont'>
                <Aside />
                <Tabs />
            </div>
        </section>
    )
}

export default Dashboard