import React from 'react'
import { SpinnerRoundOutlined } from 'spinners-react';
const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={
            {
                height: '100vh',
                width: '100vw',
                backgroundColor: '#cfcfcf7f',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999
            }
        }>
            <SpinnerRoundOutlined color="#56BBF1" speed={100} size={200} />
        </div>
      
    )
}

export default Spinner