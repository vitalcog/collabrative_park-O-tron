import React, { Component } from 'react'
import PopUp from './pop_up_form'

class Spaces extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInput: false,
      showTransaction: false,
    }
  }

  parkCar(inputValue) {
    fetch(`https://lotbot3000.herokuapp.com/lots/
      ${this.props.lotNumber}/
      ${this.props.spaceNumber - 1}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            licensePlate: inputValue
        }),
      }).then(() => this.props.fetch()
    ).then(() => this.setState({
      showInput: false,
    }))
  }

  removeCar() {
    fetch(`https://lotbot3000.herokuapp.com/lots/
      ${this.props.lotNumber}/
      ${this.props.spaceNumber - 1}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
      })
      .then(response => { response.json()
        .then(response => {
            this.setState({
              data: response,
            })
            console.log('info from log OUT')
            console.log(response)
        })
      })
      .then(() => this.props.fetch()
    ).then(() => this.setState({
      showTransaction: true,
    }))
  }

  render() {

    if (this.props.data.vehicle === null && this.state.showInput === false) {
      return (
        <div
          className="lil_space"
          onClick={() => this.setState({
            showInput: true,
          })}>
          {this.props.spaceNumber}
        </div>
      )
    } else if (this.state.showInput === true) {
      return(
        <div className="lil_space" >
          {this.props.spaceNumber}
          <PopUp park={value => this.parkCar(value)}/>

          <button
            onClick={() => this.setState({
              showInput: false,
            })}>cancel
          </button>
        </div>
      )
    } else {
      return (
        <div className="occupied" onClick={() => this.removeCar()}>
          {this.props.spaceNumber}
        </div>
      )
    }
  }
}

export default Spaces
