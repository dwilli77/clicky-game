import React from 'react'
import './nav.css'

const Nav = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#home">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/255px-Flag_of_Tennessee.svg.png" width="40" height="30" className="d-inline-block align-top mr-2 mt-2" alt="" />
                Fun With Flags
            </a>
            <span className="navbar-text">
                Score: {props.score}
            </span>
        </nav>
    )
}

export default Nav;