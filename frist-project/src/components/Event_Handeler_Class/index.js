import React, { Component } from 'react'

export default class Event_Handeler_Class extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ''
        }
    }
    

    handelOnChange = (e) => {
        this.setState({
            changedValue : e.target.value
        }, () => {
            console.log(this.state.changedValue)
        })

        
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handelOnChange}/>
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}
