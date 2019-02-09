import React from 'react'
import createLeague from '../../store/actions/leagueActions'
import { connect } from 'react-redux'

const LeagueTable = ({ leagueTable }) => {

    
    return (
        <div className="project-list section">
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leagueTable && leagueTable.map(line =>
                        <tr>
                            <td data-label="Name">{line.name}</td>
                            <td data-label="Won">{line.won}</td>
                            <td data-label="Lost">{line.lost}</td>
                            <td data-label="Points">{line.points}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createLeague: (leagueTable) => dispatch(createLeague(leagueTable))
    }
}

export default connect()(LeagueTable)