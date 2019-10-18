import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { clearInputs } from '../ducks/inputsReducer'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            redirect: false
        }
    }

    flipRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/inputs'/>
        }
    }
    
    render(){
        return(
            <div className='header'>
                {this.renderRedirect()}
                <div className='logo'>{`MAD LIB THEATER`}</div>
                <button
                    className='header-button'
                    onClick={() => {
                        this.props.clearInputs()
                        this.flipRedirect()
                    }}
                >START AGAIN</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        inputsReducer: state.inputsReducer
    }
}

export default connect(mapStateToProps, { clearInputs })(Header)