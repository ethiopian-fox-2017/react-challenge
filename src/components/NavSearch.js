import React from 'react'

class NavSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search : ''
    }
  }


  render(){
    return (
      <div>
      <nav className="nav hero is-default has-shadow" id="top">
        <div className="container">
          <div className="nav-left">
            <p className="searchbox">
              <input className="input" type="text" placeholder="Search News" value={this.state.search} onChange={(e) => this.setState({search : e.target.value})} />
            </p>
            <span className="nav-item">
       <button type="button" className="button" onClick={() => this.props.searchData(this.state.search)}>
         CARI
       </button>
       <a className="button is-info">
         Sign up
       </a>
     </span>
            </div>
            <div className="nav-right nav-menu">
              <a className="nav-item is-tab">
                <i className="fa fa-bell">{this.state.search}</i>
              </a>
              <a className="nav-item is-tab">
                <i className="fa fa-plus"></i>
                <span className="icon icon-chevron">
                  <i className="fa fa-chevron-down"></i>
                </span>
              </a>
              </div>
              </div>
              </nav>
      </div>
    )
  }
}

export default NavSearch
