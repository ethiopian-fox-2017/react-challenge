import React, {Component} from 'react';
import '../App.css';
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
     console.log('bisa');
   }

    componentDidMount() {
        fetch(' https://newsapi.org/v1/articles?source=techcrunch&apiKey=10b1289b8ef14b00a2199b7876a63ec1', {'mode': 'cors'}).then((res) => res.json()).then(res => {
            this.setState({articles: res.articles});

        })
    }

    render() {
        return (
            <div className="App">
                <Search sayhallo={()=>this.sayhallo()}/>
                <Articles sendarticle={this.state.articles}/>
            </div>
        );
    }
}

export default ViewArticle;
