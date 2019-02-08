import React from 'react'
import { Link } from 'react-router-dom'
import SighnedInLinks from './SighnedInLinks'
import SignedOutLinks from './SighnedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brank-logo">Sports League</Link>
                <SighnedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar