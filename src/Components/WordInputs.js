import React, {Component} from 'react'
import { connect } from 'react-redux'
import { saveInputs } from '../ducks/inputsReducer'

class WordInputs extends Component {
    constructor(props) {
        super(props)
        this.state= {
            inputOne: this.props.inputsReducer.inputs[0],
            inputTwo: this.props.inputsReducer.inputs[1],
            inputThree: this.props.inputsReducer.inputs[2],
            inputFour: this.props.inputsReducer.inputs[3],
            inputFive: this.props.inputsReducer.inputs[4],
            inputSix: this.props.inputsReducer.inputs[5],
            inputSeven: this.props.inputsReducer.inputs[6],
            inputEight: this.props.inputsReducer.inputs[7],
            inputNine: this.props.inputsReducer.inputs[8],
            inputTen: this.props.inputsReducer.inputs[9],
            inputEleven: this.props.inputsReducer.inputs[10],
            inputTwelve: this.props.inputsReducer.inputs[11],
            inputThirteen: this.props.inputsReducer.inputs[12],
            inputFourteen: this.props.inputsReducer.inputs[13],
            inputFifteen: this.props.inputsReducer.inputs[14],
            inputSixteen: this.props.inputsReducer.inputs[15],
            inputSeventeen: this.props.inputsReducer.inputs[16],
            inputEighteen: this.props.inputsReducer.inputs[17],
            inputNineteen: this.props.inputsReducer.inputs[18],
            inputTwenty: this.props.inputsReducer.inputs[19]
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState ({
            [name]: value
        })
    }
    
    render(){
        const {
            inputOne,
            inputTwo,
            inputThree,
            inputFour,
            inputFive,
            inputSix,
            inputSeven,
            inputEight,
            inputNine,
            inputTen,
            inputEleven,
            inputTwelve,
            inputThirteen,
            inputFourteen,
            inputFifteen,
            inputSixteen,
            inputSeventeen,
            inputEighteen,
            inputNineteen,
            inputTwenty
        } = this.state
        return(
            <div className='inputs-background'>
                <div className='inputs-container'>
                    
                    {/* INPUT ONE */}
                    <div className='input-container'>
                        <div>Type of Dessert:</div>
                        <input
                            className='input-box'
                            name='inputOne'
                            value={this.state.inputOne}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT TWO */}
                    <div className='input-container'>
                        <div>Silly Word:</div>
                        <input
                            className='input-box'
                            name='inputTwo'
                            value={this.state.inputTwo}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT THREE */}
                    <div className='input-container'>
                        <div>Word for Father:</div>
                        <input
                            className='input-box'
                            name='inputThree'
                            value={this.state.inputThree}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT FOUR */}
                    <div className='input-container'>
                        <div>Year:</div>
                        <input
                            className='input-box'
                            name='inputFour'
                            value={this.state.inputFour}
                            onChange={e => this.handleChange(e)}
                            maxLength='6'
                            type='text'
                        />
                    </div>

                    {/* INPUT FIVE */}
                    <div className='input-container'>
                        <div>Celebrity Name:</div>
                        <input
                            className='input-box'
                            name='inputFive'
                            value={this.state.inputFive}
                            onChange={e => this.handleChange(e)}
                            maxLength='20'
                            type='text'
                        />
                    </div>

                    {/* INPUT SIX */}
                    <div className='input-container'>
                        <div>Type of Plant:</div>
                        <input
                            className='input-box'
                            name='inputSix'
                            value={this.state.inputSix}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT SEVEN */}
                    <div className='input-container'>
                        <div>Adjective:</div>
                        <input
                            className='input-box'
                            name='inputSeven'
                            value={this.state.inputSeven}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT EIGHT */}
                    <div className='input-container'>
                        <div>Pet Name:</div>
                        <input
                            className='input-box'
                            name='inputEight'
                            value={this.state.inputEight}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT NINE */}
                    <div className='input-container'>
                        <div>Name of a Band:</div>
                        <input
                            className='input-box'
                            name='inputNine'
                            value={this.state.inputNine}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT TEN */}
                    <div className='input-container'>
                        <div>Animal (plural):</div>
                        <input
                            className='input-box'
                            name='inputTen'
                            value={this.state.inputTen}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT ELEVEN */}
                    <div className='input-container'>
                        <div>Verb Ending in -ing:</div>
                        <input
                            className='input-box'
                            name='inputEleven'
                            value={this.state.inputEleven}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT TWELVE */}
                    <div className='input-container'>
                        <div>Number:</div>
                        <input
                            className='input-box'
                            name='inputTwelve'
                            value={this.state.inputTwelve}
                            onChange={e => this.handleChange(e)}
                            maxLength='6'
                            type='text'
                        />
                    </div>

                    {/* INPUT THIRTEEN */}
                    <div className='input-container'>
                        <div>Measurement of Time:</div>
                        <input
                            className='input-box'
                            name='inputThirteen'
                            value={this.state.inputThirteen}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT FOURTEEN */}
                    <div className='input-container'>
                        <div>Body Part:</div>
                        <input
                            className='input-box'
                            name='inputFourteen'
                            value={this.state.inputFourteen}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT FIFTEEN */}
                    <div className='input-container'>
                        <div>Type of Drink:</div>
                        <input
                            className='input-box'
                            name='inputFifteen'
                            value={this.state.inputFifteen}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT SIXTEEN */}
                    <div className='input-container'>
                        <div>Type of Doctor:</div>
                        <input
                            className='input-box'
                            name='inputSixteen'
                            value={this.state.inputSixteen}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT SEVENTEEN */}
                    <div className='input-container'>
                        <div>One Syllable Noise:</div>
                        <input
                            className='input-box'
                            name='inputSeventeen'
                            value={this.state.inputSeventeen}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT EIGHTEEN */}
                    <div className='input-container'>
                        <div>Noun (plural):</div>
                        <input
                            className='input-box'
                            name='inputEighteen'
                            value={this.state.inputEighteen}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT NINETEEN */}
                    <div className='input-container'>
                        <div>Mode of Transportation:</div>
                        <input
                            className='input-box'
                            name='inputNineteen'
                            value={this.state.inputNineteen}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>

                    {/* INPUT TWENTY */}
                    <div className='input-container'>
                        <div>Holiday:</div>
                        <input
                            className='input-box'
                            name='inputTwenty'
                            value={this.state.inputTwenty}
                            onChange={e => this.handleChange(e)}
                            maxLength='10'
                            type='text'
                        />
                    </div>
                    <div className='button-container'>
                            <button
                                className = 'inputs-button'
                                onClick = {() => {
                                    this.props.saveInputs(
                                        inputOne,
                                        inputTwo,
                                        inputThree,
                                        inputFour,
                                        inputFive,
                                        inputSix,
                                        inputSeven,
                                        inputEight,
                                        inputNine,
                                        inputTen,
                                        inputEleven,
                                        inputTwelve,
                                        inputThirteen,
                                        inputFourteen,
                                        inputFifteen,
                                        inputSixteen,
                                        inputSeventeen,
                                        inputEighteen,
                                        inputNineteen,
                                        inputTwenty
                                    )
                                    this.props.history.push('/ready-to-submit')
                                }}
                            >
                                SAVE INPUTS
                        </button>
                    </div>
                </div>
            </div>
        )   
    }
}

function mapStateToProps (state) {
    return {
        inputsReducer: state.inputsReducer
    }
}

export default connect(mapStateToProps, { saveInputs })(WordInputs)