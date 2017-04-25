import React from 'react'

class SearchMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyWord :''
    }
    this.changesState = this.changesState.bind(this)

  }

  render() {
    return (
      <div className="searchForm">
        <input onChange={this.changesState} type="text" placeholder="Search your fav film.." value={this.state.keyWord}/>
        <input type="submit" onClick={() => this.props.newDataMovie(this.state.keyWord)}/>
      </div>
    )
  }

  changesState(e) {
    this.setState({
      keyWord : e.target.value
    })
  }

}

export default SearchMovie
