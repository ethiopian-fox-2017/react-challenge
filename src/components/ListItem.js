import React from 'react';
import Item from './Item';

class ListItem extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
      {this.props.items.length === 0 && <h1>Loading...</h1>}
      <ul>
        { this.props.items.map((item, index) => {
          // console.log(item);
          return (
          <Item key={index} name={item.name} ></Item>
          )


        })
        }
      </ul>
      </div>
    )
  }

}

export default ListItem
