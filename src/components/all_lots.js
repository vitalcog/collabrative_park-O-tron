import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AllLots extends Component {

  render() {

    const MappedResponse = this.props.data.map((lot, index) => {
      return (
        <Link key={index} className="link" to={`/lots/${index + 1}`}>Lot #{lot.id + 1}</Link>
      )
    })

    return (
      <div className="lotList">
        {MappedResponse}
        <Link id="transactions" className="link" to="/transactions">Transactions</Link>
      </div>
    )
  }
}

export default AllLots
