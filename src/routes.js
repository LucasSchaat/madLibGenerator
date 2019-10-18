import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import WordInputs from './Components/WordInputs'
import Submit from './Components/Submit'
import MadLibOutput from './Components/MadLibOutput'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/inputs' component={WordInputs} />
        <Route path='/ready-to-submit' component={Submit} />
        <Route path='/madlib-output' component={MadLibOutput} />
    </Switch>
)