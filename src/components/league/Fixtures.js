import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const Fixtures = (props) => {
    const { auth } = props
    if(!auth.uid) return <Redirect to='/signin' />
    return (
        <h1>Fixtures</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
} 


export default connect(mapStateToProps, null)(Fixtures)