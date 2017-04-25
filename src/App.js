import React from 'react';
import axios from 'axios'
import './App.css';
import JokeList from './components/JokeList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

const style = {
  margin: 20,
  paddingLeft: 30,
  paddingRight: 30,
  textAlign: 'center',
  display: 'inline-block',
};

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jokes: []
    }
    injectTapEventPlugin()
  }

  componentDidMount() {
    console.log('did mount');
    let self = this
    axios.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .then(res => {
        console.log(res.data);
        self.setState({ jokes: res.data })
      })
      .catch(err => console.log(err))
  }

  addJoke() {
    let newJoke = {
      id: 99,
      setup: 'Who am I?',
      punchline: 'I am I'
    }
    let newJokes = this.state.jokes.concat(newJoke)
    this.setState({ jokes: newJokes })
  }

  removeJoke(removingIndex) {
    let newJokes = this.state.jokes.filter((joke, index) => index !== removingIndex)
    this.setState({ jokes: newJokes })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Paper style={style} zDepth={2}>
          <h1>What Jokes Today ??</h1>
          <RaisedButton label="Add Joke" onClick={ () => this.addJoke() } />
          </Paper>
          <JokeList
            jokes={ this.state.jokes }
            removeJoke={ this.removeJoke.bind(this) }
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
