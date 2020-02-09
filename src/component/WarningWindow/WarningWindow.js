import React from 'react';

const warningMessage = 'Every uchecked answer is incorrect. Do you want to continue?'

const WarningWindow = (props) => {
    function clickAgree () {
        alert('clicked Yes')
    }
    function clickDisagree () {
        alert('clicked No')
    }
  return (
  <div>
      {props.warningMessage}
      <button onClick={clickAgree}>Yes</button>
      <button onClick={clickDisagree}>No</button>
  </div>
  )
}


export default WarningWindow

