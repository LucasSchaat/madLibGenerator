import React from 'react'
import {Link} from 'react-router-dom'

export default function Landing(){
    return(
        <div className='landing'>
            <div className='landing-main'>WELCOME TO THE MAD LIB THEATER</div>
            <Link to='/inputs'><button>LET'S GET STARTED</button></Link>
        </div>
    )
}