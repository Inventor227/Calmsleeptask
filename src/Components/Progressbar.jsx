

import React from 'react'

function Progressbar(props) {
  return (
    <div className="progress" >
        <div className="progress-bar progress-bar-striped active" role="progressbar"
  aria-valuenow={props.completionRate} aria-valuemin="0" aria-valuemax="100" style={{width: `${props.completionRate}%`}}>
    {props.completionRate}% 
  </div>
</div>
  )
}

export default Progressbar;



