import React from 'react'
import { NavLink } from 'react-router-dom'

const SighnedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Fixtures</NavLink></li>
            <li><NavLink to='/'>Rules</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-2'>MO</NavLink></li>
        </ul>
    )
}

export default SighnedInLinks