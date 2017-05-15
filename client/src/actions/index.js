const fetchArticlesDone = (articles) => ({type:'FETCH_ARTICLES_DONE',payload:articles,})
export const fetchArticles = () => {
  return (dispatch) =>
    fetch('https://newsapi.org/v1/articles?source=techcrunch&apiKey=10b1289b8ef14b00a2199b7876a63ec1')
      .then(res => res.json())
      .then(data => dispatch(fetchArticlesDone(data.articles)));
}

export const newUser = (user) =>({
  type:'NEW_USER',
  payload:user
})

export const deleteUser = (id) =>({
  type:'DELETE_USER',
  payload:id
})
