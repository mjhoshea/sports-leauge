import React, { Component } from 'react'
import Notifications from './Notifications'
import LeagueTable from '../league/LeagueTable'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const { leagueTable } = this.props

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <LeagueTable leagueTable={leagueTable}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>

                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        leagueTable: state.league.leagueTable
    }
}

export default connect(mapStateToProps)(Dashboard)