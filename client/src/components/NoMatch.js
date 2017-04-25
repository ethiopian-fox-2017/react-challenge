import React from 'react'

const NoMatch = ({location}) => {
  return (
    <div>
      <h3>No Match 404 for <code>{location.pathname}</code></h3>
    </div>
  )
}

export default NoMatch
