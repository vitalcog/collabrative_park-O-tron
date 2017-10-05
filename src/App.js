import React, { Component } from 'react'
import AllLots from './components/all_lots'
import SingleLot from './components/individual_lot'
import TransRecord from './components/transactions'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      LotInfo: [],
    }
  }

  componentWillMount() {
    fetch('https://lotbot3000.herokuapp.com/lots/')
    .then(response => { response.json()
      .then(response => {
        this.setState({
          LotInfo: response,
        })
      })
    })
  }

  render() {
    return (
      <div className="flexHorizontal">
        <AllLots data={this.state.LotInfo} />
        <Switch>
          <Route path='/lots/:id' component={SingleLot} />
          <Route path='/transactions' component={TransRecord} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
