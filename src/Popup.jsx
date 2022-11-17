import React from 'react'
import './popup.css'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup' style={{animation: 'slide .3s linear'}}>
      <div className="popup-inner">
        { props.children }
      </div>
    </div>
  ) : "";
}

export default Popup
