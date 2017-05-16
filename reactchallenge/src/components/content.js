import React, { Component } from 'react'

class Content extends Component {
  render(){
    return(
      <div className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-1by1">
              <img src={this.props.result.image_url} alt="Image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={this.props.result.image_url} alt="Image"/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.result.title} </p>
                <p className="subtitle is-6">{this.props.result.res_count}</p>
              </div>
            </div>

            <div className="content">
            {this.props.result.description}. <a>@bulmaio</a>.
              <a>#css</a> <a>#responsive</a>
              <br/>
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Content
