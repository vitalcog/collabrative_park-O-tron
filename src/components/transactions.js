import React, { Component } from 'react'

class TransRecord extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: [],
    }
  }

  componentWillMount() {
    fetch('https://lotbot3000.herokuapp.com/transactions/')
    .then(response => { response.json()
      .then(response => {
        this.setState({
          record: response,
        })
        console.log(response)
      })
    })
  }

  render() {

    const transRecords = this.state.record.map( (record, index) => {
      let checkIn = record.checkedInDate
      let checkOut = record.checkedOutDate
      return (
        <div key={index} className="singleRecord">
          <p className="recordInfo" className="date">
            Date: {checkIn.month + ' ' + checkIn.dayOfMonth + ' ' + checkIn.year}
          </p>
          <p className="recordInfo">
            Time in: hour: {checkIn.hour} minute: {checkIn.minute}
          </p>
          <p className="recordInfo">
            Time out: hour: {checkOut.hour} minute: {checkOut.minute}
          </p>
          <p className="recordInfo">
            Parking Lot {record.lotId + 1}, parking space: {record.spaceIndex + 1}
          </p>
          <p className="recordInfo">
            Vehicle tag number: {record.vehicle.licensePlate}
          </p>
          <p className="recordInfo" className="total">
            Amount paid: ${((record.timeDiffInSec / 60) / 60) * 5}
          </p>
        </div>
      )
    })

    return (
      <div className="transRecord">
        {transRecords}
      </div>
    )
  }
}

export default TransRecord
