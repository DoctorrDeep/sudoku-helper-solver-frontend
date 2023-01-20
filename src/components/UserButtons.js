import React from 'react'

function UserButtons(props) {
  return (
    <button onClick={() => props.correctTableValues()}>Fill correct values</button>
  )
}

export default UserButtons
