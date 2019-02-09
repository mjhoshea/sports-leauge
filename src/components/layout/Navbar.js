import React from 'react'
import { Link } from 'react-router-dom'
import SighnedInLinks from './SighnedInLinks'
import SignedOutLinks from './SighnedOutLinks'
import { connect } from 'react-redux'

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

const mapStateToProps = (state) => {
    console.log(state) 
    return {

    }
}

export default connect(mapStateToProps)(Navbar)