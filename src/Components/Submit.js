import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveInputsToDB } from '../ducks/inputsReducer'

function Submit(props) {
    console.log(props)
    return(
        <div className='submit-background'>
            <div className='submit-text'>Ready to Submit? </div>
            <div className='submit-button-container'>
                <Link to='/inputs'><button>NO</button></Link>
                <button
                    onClick={()=> {
                        this.props.saveInputsToDB(this.props.inputsReducer.inputs)
                        this.props.history.push('/madlib-output')
                    }}    
                >YES</button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        inputsReducer: state.inputsReducer
    }
}

export default connect(mapStateToProps, {saveInputsToDB})(Submit)