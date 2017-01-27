import React from 'react'
import './styles/spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner-container">
            <svg className="spinner" width="150px" height="150px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        </div>
    )
}

export default Spinner