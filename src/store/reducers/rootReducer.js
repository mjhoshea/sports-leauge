import authReducer from './authReducer'
import leagueReducer from './leagueReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducer,
    league: leagueReducer
})

export default rootReducer