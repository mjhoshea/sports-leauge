import authReducer from './authReducer'
import leagueReducer from './leagueReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'; 
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    league: leagueReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer

})

export default rootReducer