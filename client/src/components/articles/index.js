import React, { Component } from 'react';

import '../../App.css';
import Articles from './articles';
import Search from './search'

class ViewArticle extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            showarticles: ''
        };
    };

   sayhallo(){
   }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <Search sayhallo={()=>this.sayhallo()}/>
                <Articles sendarticle={this.props.articles}/>
            </div>
        );
    }
}




export default ViewArticle;
