import React from 'react';

class Item extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return (
      <li > {this.props.name} </li>
    )
  }

}

export default Item
