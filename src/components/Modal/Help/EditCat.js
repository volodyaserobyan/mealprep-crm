import React, {
    useState,
    useEffect
} from 'react'
import { Input, Button } from '../../Form'
import { connect } from 'react-redux'
import { postCategoriesHelpCenter } from '../../../action/Action'
import { HELPCENTERCATGURL } from '../../../const/ConstUrl'
import './EditCat.scss'

const EditCat = props => {

    const [categoryValue, setCategoryValue] = useState('')
    const [success, setIsSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (id, e) => {
        e.preventDefault()

        const sendObj = {
            title: categoryValue,
            label: categoryValue.split(' ').join('_').toLowerCase()
        }
        props.patchCategories(`${HELPCENTERCATGURL}/${id}`, sendObj, true)
    }

    useEffect(() => {
        if (props.helpPOST != undefined) {
            if (props.helpPOST.error_code == undefined) {
                setIsSuccess(true)
            } else {
                setErrorMessage(props.helpPOST.message)
            }
        }
    }, [props.helpPOST])

    if (success) {
        props.closeCat()
    }

    return (
        <section className='EditCat'>
            {errorMessage !== '' && <p>{errorMessage}</p>}
            <form onSubmit={e => handleSubmit(props.id, e)} className='EditCat-Cont'>
                <div>
                    <Input
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={categoryValue}
                        onChange={e => setCategoryValue(e.target.value)} />
                    <div>
                        <Input
                            type='submit'
                            className="Submit custom"
                            value='Change' />
                        <Button
                            value='Close'
                            onClick={() => props.closeCat()} />
                    </div>
                </div>
            </form>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        helpPOST: state.helpReducer.postCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        patchCategories: (url, body, isPatch) => dispatch(postCategoriesHelpCenter(url, body, isPatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCat)