import React, { useState } from 'react'
import './HelpGeneral.scss'

const HelpGeneral = props => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className='HelpGeneral'>
            {props.item.questions.map(item =>
                <div key={item._id}>
                    <h1 onClick={() => setIsOpen(!isOpen)}> {item.title}</h1>
                    {isOpen &&
                        <p>{item.answere}</p>
                    }
                </div>
            )}
        </section>
    )
}

export default HelpGeneral