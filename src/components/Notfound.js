import React from 'react';

const Notfound = ({location}) => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <center><p className="title is-3"> PAGE <code>localhost:3000{location.pathname}</code> NOT FOUND</p></center>
    </div>
  )
}

export default Notfound
