import React from 'react'


class NewsList extends React.Component {
  constructor(props){
    super(props)

  }
  render(){
    return (

      <div>
      {this.props.news.length === 0 && <div>Lagi Loading</div>}
      <table className="table">
      <thead>
        <tr>
          <th><abbr title="Judul Berita">Judul Berita</abbr></th>
          <th><abbr title="description">Deskripsi Berita</abbr></th>
        </tr>
      </thead>
      <tbody>
        {this.props.news.map((berita, index) =>
          <tr key={index}>
          <td>{berita.title}</td>
          <td>{berita.description}</td>
        </tr>
        )}
      </tbody>
      </table>
      </div>
    )
  }
}

export default NewsList
