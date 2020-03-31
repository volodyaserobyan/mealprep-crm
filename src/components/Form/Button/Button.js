import React from 'react'
import classNames from 'classnames'
import './Button.scss'

const Button = props => {

    return (
        <button onClick={e => props.onClick !== undefined && props.onClick(e)} className={classNames('button', props.className)}>{props.value}</button>
    )
}

export default Button