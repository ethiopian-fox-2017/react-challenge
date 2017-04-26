import React, {Component} from 'react';

class Articles extends Component {
    render() {
        return (
            <div >
              {this.props.sendarticle.map((article,index)=>{
                return(
                   <div className='card' key={index} style={{borderStyle:'solid',borderWidth: '5px',margin:'20px'}}>
                     <div className="card-image">
                      <figure className="image is-640x480">
                        <img
                          style={{width:'480px',height:'320px'}}
                          src={article.urlToImage} alt='lala'/>
                      </figure>
                    </div>
                       <div className='card-content'>
                           <div className="media">
                             <div className="media-content">
                              <p className="title is-4">Title : {article.title}</p>
                              <p className="subtitle is-6">author : {article.author}</p>
                            </div>
                           </div>
                           <div className="content">
                             {article.description}
                            </div>
                       </div>

                   </div>
                )

              })}
            </div>
        )
    }
}

export default Articles;
