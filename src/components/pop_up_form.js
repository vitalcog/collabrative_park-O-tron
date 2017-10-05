import React, { Component } from 'react'

class PopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }


  keyUp(event) {
      if(event.key === 'Enter') {
        this.props.park(this.state.value)
      }
  }

  handleChange(ev) {
    this.setState({
      value: ev.target.value,
    })
  }

  render() {
    return(
      <div>
        <input className="parkingInput"
          type="text"
          onKeyUp={ event => this.keyUp(event)}
          onChange={ ev => this.handleChange(ev)}
          value={this.state.value}
          placeholder="enter vehicle tag id"
        />
      </div>
    )
  }
}

export default PopUp
