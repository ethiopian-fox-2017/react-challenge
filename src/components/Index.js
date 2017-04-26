import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import '../App.css';

class Index extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      modalActive: false,
      activeModalPost: {
        episode: '',
        title: '',
        opening_crawl: ''
      },
      isLogin: false
    }
  }

  checkLoginState(){
    if(window.localStorage.user){
      this.setState({isLogin: true})
    } else {
      this.setState({isLogin: false})
    }
  }

  componentWillMount() {
    this.checkLoginState();
  }

  componentDidMount() {
    fetch('http://swapi.co/api/films/')
    .then(response => response.json())
    .then(
      (data) => {
        console.log(data);
        this.setState({posts: data.results})
      }
    )
  }

  openModal(post) {
    this.setState({modalActive: true, activeModalPost: post})
  }

  closeModal() {
    this.setState({modalActive: false})
  }

  render() {
    const modalStatus = this.state.modalActive ? 'is-active' : '';
    return (
      <div className="container"><br />
        {
          this.state.isLogin ?
          <div>
          <p className="title is-1">STARWARS</p>
          <p className="title is-4">Movie Database</p>
            <div className="columns is-mobile is-multiline">
              { this.state.posts.length === 0 && <center><p className="container title is-2"><br /><br /><br />NOW LOADING...</p></center>}
              { this.state.posts.map((post) => {
                return (
                  <div className="column is-3" key={post.episode_id}>
                    <div className="card">
                      <div className="card-content">
                        <div>
                          <p className="title is-3 is-spaced">{post.title}</p>
                          <p>Director: {post.director}</p>
                          <p>Episode: {post.episode_id}</p>
                        </div>
                      </div>
                      <footer className="card-footer">
                        <p className="card-footer-item">
                          <span>
                            <a onClick={ () => this.openModal(post) }>Opening Crawl</a>
                          </span>
                        </p>
                        <p className="card-footer-item">
                          <span>
                            <Link to={"/details/" + post.episode_id}>Details</Link>
                          </span>
                        </p>
                      </footer>
                    </div>
                  </div>
                )
                })
              }
            </div>

            <div className={ 'modal ' + modalStatus }>
              <div className="modal-background" style={{ backgroundColor: 'rgba(0,0,0, 0.8)'}}></div>
              <div className="modal-content">
                <div className="box">
                  <article className="media">
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>Episode {this.state.activeModalPost.episode_id} - {this.state.activeModalPost.title}</strong>
                          <br />
                            {this.state.activeModalPost.opening_crawl}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <button className="modal-close" onClick={ () => this.closeModal() }></button>
            </div>
          </div>

          : <Redirect to={{pathname: '/login'}}/>
        }
      </div>
    ); //end of RETURN line 54
  }
}

export default Index;
