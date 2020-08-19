import React, { Component } from 'react'

class Clock extends Component {
    constructor (props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    componentDidMount () {
        this.timeId=setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }

    tick(){
        this.setState({
            date: new Date() 

        })
    }
    render() {
      return (
        <div className='Clock'>
            <h2>The time is:{this.state.date.toLocaleTimeString()}</h2>
            </div>
    )
}  
    }
    

export default Clock