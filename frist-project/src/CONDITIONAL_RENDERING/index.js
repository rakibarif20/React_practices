import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

 class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        const {isLoggedIn} = this.state
        let element ;
        if(isLoggedIn){
            element = <HomePage />
        }
        else {
            element = <LoginPage /> 
        }

        return <div>
            {element}
        </div>
    }
}

export default CONDITIONAL_RENDERING