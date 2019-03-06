import React from 'react'
import './ProgramHeader.less';

export default function ProgramHeader(props) {
  return (
    <header className='ProgramHeader' style={{ backgroundImage: `url("${props.image}")` }}>
      <div className="fader"></div>
      <div className="fader bottom"></div>
    </header>
  )
}
