import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getOutput } from '../ducks/inputsReducer'

class MadLibOutput extends Component {

    componentDidMount(){
        this.props.getOutput()
    }

    componentDidUpdate(prepProps){
        if(this.prevProps !== this.props) {
            this.render()
        }
    }
    
    render(){
        const {output} = this.props.inputsReducer
        return(
            <div className='output-background'>
                <div className='output-text'>{`ELF: Hi Santa.`}</div>
                <div className='output-text'>{`SANTA: Hello ${output[0]}.`}</div>
                <div className='output-text'>{`ELF: You’re looking at me like I’m on your naughty list.`}</div>
                <div className='output-text'>{`SANTA: I was counting my toys and was one ${output[1]} short. I believe you stole it.`}</div>
                <div className='output-text'>{`ELF: But ${output[2]}!`}</div>
                <div className='output-text'>{`SANTA: I started making that toy in ${output[3]}. What will little ${output[4]} think when he/she wakes up on Christmas morning with nothing under the ${output[5]}?`}</div>
                <div className='output-text'>{`ELF: I would never steal such a ${output[6]} toy.`}</div>
                <div className='output-text'>{`SANTA: Where were you the night before Christmas?`}</div>
                <div className='output-text'>{`ELF: I was with ${output[7]}. We were listening to ${output[8]}’s holiday album and making snow ${output[9]}.`}</div>
                <div className='output-text'>{`SANTA: Then why did Rudolph see you ${output[10]} on the roof ${output[11]} ${output[12]} before the toy went missing?`}</div>
                <div className='output-text'>{`ELF: That’s a coincidence.`}</div>
                <div className='output-text'>{`SANTA: The reason I work so hard, is because I get to spread joy to millions of people, and go sit by the fire shaking my ${output[13]} while eating cookies and drinking ${output[14]}.`}</div>
                <div className='output-text'>{`ELF: Fine, I stole the toy. But I only did it because I wanted to impress my ${output[15]}.`}</div>
                <div className='output-text'>{`SANTA: ${output[16]}, ${output[16]}, ${output[16]} Every time there’s a holiday miracle, I sing my favorite Christmas song, Jingle ${output[17]}.`}</div>
                <div className='output-text'>{`(singing)`}</div>
                <div className='output-text'>{`Jingle ${output[17]}, Jingle ${output[17]},`}</div>
                <div className='output-text'>{`Jingle all the way.`}</div>
                <div className='output-text'>{`Oh what fun it is to ride`}</div>
                <div className='output-text'>{`In a one horse open ${output[18]}.`}</div>
                <div className='output-text'>{`ELF: Merry ${output[19]} Santa!`}</div>
            </div>
        )   
    }
}

function mapStateToProps(state){
    return {
        inputsReducer: state.inputsReducer
    }
}

export default connect(mapStateToProps, {getOutput})(MadLibOutput)