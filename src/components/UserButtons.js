import React from 'react'

function UserButtons(props) {
  return (
    <div>
      <button onClick={() => props.correctTableValues()}>Fill correct values</button><br/>
      <button onClick={() => props.resetTableValues()}>Reset Grid</button>
    </div>
  )
}

export default UserButtons
