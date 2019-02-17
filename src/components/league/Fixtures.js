import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class Fixtures extends Component {



    render() {
        const { auth } = this.props
        const email =  auth.email
        console.log(email)
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <h2>Fixtures for { email }</h2>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps, null)(Fixtures)