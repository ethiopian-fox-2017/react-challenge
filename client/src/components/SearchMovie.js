import React from 'react'

class SearchMovie extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="searchForm">
        <input type="text" placeholder="Search your fav film.." />
      </div>
    )
  }

}

export default SearchMovie
