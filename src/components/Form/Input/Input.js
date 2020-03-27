import React from 'react'
import './Input.scss'
import classNames from 'classnames'

const Input = props => {

    return (
        <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            className={classNames('input', props.className)}
            value={props.value}
            onChange={e => props.onChange(e)} />
    )
}

export default Input