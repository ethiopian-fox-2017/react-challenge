import React from 'react'
import {Card, CardText} from 'material-ui/Card';

class Planets extends React.Component {
  constructor() {
    super()
    this.state = {
      planets: [],
      api: 'planets'
    }
  }

  componentDidMount() {
    fetch(`http://swapi.co/api/${this.state.api}/`)
    .then(response => response.json())
    .then(data => this.setState({planets: data.results}))
    .catch(err => console.log(err.message))
  }

  render() {
    return (
      <div>
        {this.state.planets.map((planet) => {
          return (
            <Card key={planet.url}>
              <CardText>Name : {planet.name}</CardText>
              <CardText>Population : {planet.population}</CardText>
              <CardText>Climate : {planet.climate}</CardText>
              <CardText>Terrain : {planet.terrain}</CardText>
              <CardText>Diameter : {planet.diameter}</CardText>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default Planets
