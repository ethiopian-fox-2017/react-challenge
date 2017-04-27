import React from 'react';

class SearchAPI extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        searchText: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmitStarship = this.handleSubmitStarship.bind(this);
  }

  render() {
    return (
      <div>
        <p>What do you want to search from Star Wars using id ? <input onChange={this.handleChange} value={this.state.searchText} type="text"></input></p>
        <div>
          <button onClick={this.handleSubmitStarship}>Search Starships</button>
          <button onClick={()=>{this.handleSubmitPeople()}}>Search People</button>
          <button onClick={()=>this.handleSubmitPlanets()}>Search Planets</button>
        </div>
      </div>
    )
  }

  handleChange(e){
    this.setState({searchText: e.target.value});
  }

  handleSubmitStarship(e){
    this.props.addData('starships', this.state.searchText);
    this.setState({searchText: ''});
  }

    handleSubmitPeople(e){
      this.props.addData('people', this.state.searchText);
      this.setState({searchText: ''});
    }

    handleSubmitPlanets(e){
      this.props.addData('planets', this.state.searchText);
      this.setState({searchText: ''});
    }
}

export default SearchAPI;
