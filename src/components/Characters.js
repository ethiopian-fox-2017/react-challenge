import React from 'react'
import {Card, CardText} from 'material-ui/Card';


class Characters extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      api: 'people'
    }
  }

  componentDidMount() {
    fetch(`http://swapi.co/api/${this.state.api}/`)
    .then(response => response.json())
    .then(data => this.setState({characters: data.results}))
    .catch(err => console.log(err.message))
  }

  render() {
    return (
      <div>
        {this.state.characters.map((char) => {
          return (
            <Card key={char.url}>
              <CardText>Name : {char.name}</CardText>
              <CardText>Birth Year : {char.birth_year}</CardText>
              <CardText>Gender : {char.gender}</CardText>
              <CardText>Height : {char.height}</CardText>
              <CardText>Mass : {char.mass}</CardText>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default Characters
