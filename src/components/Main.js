import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import './App.css';
import { NewsList, FormNews, ButtonRandom, ButtonRemove, NavSearch } from './index'
class Main extends Component {
  constructor(){
    super()
    this.state = {
      news : [],
      isLoggedIn : false
    }
    this.addData = this.addData.bind(this)
    this.getNews = this.getNews.bind(this)
    this.searchData = this.searchData.bind(this)
  }

  componentWillMount(){
    this.checkLogin()
  }

  checkLogin(){
    if (localStorage.getItem('tokenan')){
      this.setState({isLoggedIn : true})
      console.log('sudah');
    }

    else {
      this.setState({isLoggedIn : false})
    }

  }

  getNews(){

    fetch('https://newsapi.org/v1/articles?source=techcrunch&apiKey=14caae46bfae4240b56ff866fc9c961f',
          {method : 'GET'}).then(response => response.json())
                           .then(data => this.setState({ news: this.state.news.concat(data.articles) }))
                           .catch(err => alert('error cuy'))
  }

  addData(title, description){
    this.setState({news : this.state.news.concat([{title , description}])})
  }

  cleanNews(){
    this.setState({news : []})
  }

  searchData(word){
    let re = new RegExp(word,"ig")
    this.setState({news : this.state.news.filter(data => re.test(data.title))})

  }
  render() {
    return (
      <div>
      {this.state.isLoggedIn ? (
        <div className="App">
            <NavSearch searchData={this.searchData}/>
            <ButtonRandom getNewsAgain={this.getNews} />
            <ButtonRemove removeData={() => {this.setState({news : []})}}  />
            <NewsList news={this.state.news}/>
            { this.state.news.length != 0 &&  <FormNews addData={this.addData}/>}
        </div>
      )
      :
      (
        <Redirect to="/login"/>
      )}

      </div>

    );
  }
}

export default Main
