import axios from 'axios'
import {
    SAVE_INPUTS,
    SAVE_INPUTS_TO_DB,
    GET_OUTPUT,
    CLEAR_INPUTS
} from './actionTypes'

const initialState = {
    inputs: [],
    output: []
}

export const saveInputs = (
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
) => {
    let savedInputs = [
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
    ]
    return {
        type: SAVE_INPUTS,
        payload: savedInputs
    }
}

export const saveInputsToDB = (inputs) => {
    let data = axios.post('/api/madlibs', inputs)
                    .then(res => res.data)
    return {
        type: SAVE_INPUTS_TO_DB,
        payload: data
    }
}

export const getOutput = () => {
    let data = axios.get('/api/madlibs')
                    .then(res => res.data)
    return {
        type: GET_OUTPUT,
        payload: data
    }
}

export const clearInputs = () => {
    let data = []
    return {
        type: CLEAR_INPUTS,
        payload: data
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case SAVE_INPUTS:
            return {...state, inputs: payload}
        case CLEAR_INPUTS:
            return {...state, inputs: payload}
        case SAVE_INPUTS_TO_DB + "_FULFILLED":
            return {...state}
        case GET_OUTPUT + "_FULFILLED":
            return {...state, output: payload}
        default:
            return state
    }
}
