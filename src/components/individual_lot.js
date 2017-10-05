import React, { Component } from 'react'
import Spaces from './parking_spaces'

class SingleLot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentWillReceiveProps(newProps) {
    const lot = newProps.match.params.id - 1
    fetch(`https://lotbot3000.herokuapp.com/lots/${lot}`)
    .then(response => { response.json()
      .then(response => {
        this.setState({
          data: response,
        })
      })
    })
  }

  reFetch() {
    const lot = this.props.match.params.id - 1
    fetch(`https://lotbot3000.herokuapp.com/lots/${lot}`)
    .then(response => { response.json()
      .then(response => {
        this.setState({
          data: response,
        })
      })
    })
  }

  render() {

    const spaces = this.state.data.map( (space, index) => {
      return(
        <Spaces key={index}
          data={this.state.data[index]}
          lotNumber={this.props.match.params.id - 1}
          spaceNumber={index + 1}
          fetch={() => this.reFetch()} />
      )
    })

    return (
      <div className="single_lot">
        {spaces}
      </div>
    )
  }
}

export default SingleLot
