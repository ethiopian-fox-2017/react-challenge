import React from 'react';
import {Card, CardText} from 'material-ui/Card';


class Starships extends React.Component {
  constructor() {
    super()
    this.state = {
      starships: [],
      api: 'starships'
    }
  }

  componentDidMount() {
    fetch(`http://swapi.co/api/${this.state.api}/`)
    .then(response => response.json())
    .then(data => this.setState({starships: data.results}))
    .catch(err => console.log(err.message))
  }

  render() {
    return (
      <div>
        {this.state.starships.map((ship) => {
          return (
            <Card key={ship.url}>
              <CardText>Name : {ship.name}</CardText>
              <CardText>Model : {ship.model}</CardText>
              <CardText>Manufacturer : {ship.manufacturer}</CardText>
              <CardText>Cost in Credits : {ship.cost_in_credits}</CardText>
              <CardText>Crew : {ship.crew}</CardText>
              <CardText>Passengers : {ship.passengers}</CardText>
              <CardText>Cargo Capacity : {ship.cargo_capacity}</CardText>
              <CardText>Hyperdrive Rating : {ship.hyperdrive_rating}</CardText>
              <CardText>Starship Class : {ship.starship_class}</CardText>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default Starships
