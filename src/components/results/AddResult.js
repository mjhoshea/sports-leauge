import React, { Component } from 'react'
import addResult from '../../store/actions/resultsActions'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


class AddResult extends Component {
    state = {
        home: '',
        away: '',
        results: []
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addResult(this.state)
    }

    render() {
        const { results } = this.props;
        console.log(results)
        return (
            <div className="container">
                <div class="row">
                    <form class="col s12" onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="home" type="text" class="validate" onChange={this.handleChange} />
                                <label for="home">Home</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="away" type="text" class="validate" onChange={this.handleChange} />
                                <label for="away">Away</label>
                            </div>
                        </div>
                        <div className="input-field">
                            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        </button>
                        </div>

                    </form>
                </div>
                <div className="container">
                    <table class="ui celled table">
                        <thead>
                            <tr>
                                <th>Home</th>
                                <th>Away</th>
                            </tr>
                        </thead>
                        <tbody>

                            {results && results.map(el => {
                                return (
                                    <tr>
                                        <td data-label="Name">{el.home}</td>
                                        <td data-label="Won">{el.away}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addResult: (result) => dispatch(addResult(result))
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.firestore.ordered.results
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'results' }
    ])
)(AddResult)