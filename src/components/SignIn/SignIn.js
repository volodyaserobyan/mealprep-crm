import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Input } from '../Form'
import './SignIn.scss'

const SignIn = props => {
    const [mail, setMails] = useState('')
    const [password, setPassword] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        if (password !== '' && mail !== '') {
            setIsSuccess(true)
        }
    }

    if (isSuccess) {
        return (
            <Redirect to={{
                pathname: `${process.env.PUBLIC_URL}/dashboard/help/${props.help.categories[0]._id}`
            }} />
        )
    }
    return (
        <section className="SignIn">
            <div className="SignIn-Cont">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        name='mail'
                        placeholder='E-mail'
                        value={mail}
                        onChange={e => setMails(e.target.value)}
                    />
                    <Input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Input
                        type='submit'
                        className="Submit"
                        value='LOGIN'
                    />
                </form>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        help: state.helpReducer.getCategories
    }
}

export default connect(mapStateToProps)(SignIn)