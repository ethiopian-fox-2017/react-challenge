const initialState=[];

const articlesReducer = (state=initialState,action)=>{
  switch (action.type) {
    case 'FETCH_ARTICLES_DONE':{
        let articles = action.payload.map(article=>{
          return{
            title:article.title,
            picture_url:article.urlToImage,
            url:article.url,
            author:article.author,
            description:article.description,
            publised_at:article.publised_at
          }
        })
        let newState=articles;
        return newState;
    }
    default: return state
  }
}

export default articlesReducer
