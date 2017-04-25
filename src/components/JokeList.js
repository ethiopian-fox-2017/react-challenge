import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

class JokeList extends React.Component {
  render() {
    return (
      <div>
        { this.props.jokes.length === 0 && (<CircularProgress />)}
        { this.props.jokes.map((joke, index) => {
          return (
            <div key={ index }>
                <Card>
                  <CardHeader
                    title={ joke.setup }
                    subtitle={ joke.type }
                    actAsExpander={ true }
                    showExpandableButton={ true }
                  />
                  <CardActions>
                    <FlatButton
                      label="DISMISS"
                      onClick={ () => this.props.removeJoke(index) }
                    />
                  </CardActions>
                  <CardText expandable={ true }>
                    { joke.punchline }
                  </CardText>
                </Card>
            </div>
          )
        })}
      </div>
    )
  }
}

export default JokeList
