import React from 'react'
import messageItem from '../../../assets/Images/VectorMessage.svg'
import { Button } from '../../Form'
import { connect } from 'react-redux'
import { deleteBlog } from '../../../action/Action'
import { BLOGURL } from '../../../const/ConstUrl'
import './Item.scss'

const Item = props => {
    return (
        <div className='Blog-Item item'>
            <div className="Blog-Item_img">
                {props.item.picture == null ?
                    <img alt='' /> :
                    <img src={props.item.picture} alt='' />
                }
            </div>
            <div className="Blog-Item-Wrapper">
                <div className='Blog-Item-Wrapper-Kinds'>
                    {Object.keys(props.item.kinds).map(item =>
                        <p key={item} className="Blog-Item-Wrapper_type">
                            {item}
                        </p>
                    )}
                </div>
                <h1 className="Blog-Item-Wrapper_title">{props.item.title}</h1>
                <p className="Blog-Item-Wrapper_context">{props.item.desc}</p>
                <div className="Blog-Item-Wrapper_date">
                    <p>
                        {props.item.created_at.slice(0, props.item.created_at.indexOf('T'))}
                    </p>
                    <div className="Blog-Item-Wrapper_date_message">
                        <img src={messageItem} />
                        <p>4</p>
                    </div>
                </div>
            </div>
            <div className='Blog-Item-Button'>
                <Button
                    value='Delete'
                    className='delete'
                    onClick={() => props.deleteBlog(`${BLOGURL}/articles/${props.item._id}`)} />
                <Button
                    value='Edit'
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteBlog: url => dispatch(deleteBlog(url))
    }
}

export default connect(null, mapDispatchToProps)(Item)