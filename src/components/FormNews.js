import React from 'react'


class FormNews extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title : '',
      description : ''
    }
    this.resetForm = this.resetForm.bind(this)
  }

  resetForm(){
    this.setState({title : '', description : ''})
  }
  render(){
    return (
      <div>
        <form onSubmit={(e) => {e.preventDefault(); this.props.addData(this.state.title, this.state.description)}}>
        <div className="field">
          <label className="label">Judul</label>
            <p className="control">
              <input className="input"
              type="text"
              placeholder="Text input"
              onChange={(e) => this.setState({title : e.target.value})}
              value={this.state.title}/>
            </p>
        </div>
        <div className="field">
          <label className="label">Post</label>
            <p className="control">
              <input className="input"
              type="text"
              placeholder="Text input"
              onChange={(e) => this.setState({description : e.target.value})}
              value={this.state.description}/>
            </p>
        </div>
        <div className="field is-grouped">
          <p className="control">
            <button className="button is-primary">Submit</button>
          </p>
          <p className="control">

          </p>
        </div>
        <p>{this.state.title}</p>
        <p>{this.state.description}</p>
        </form>
          <button className="button is-link" onClick={this.resetForm}>Reset</button>
      </div>
    )
  }
}

export default FormNews
