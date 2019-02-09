export const createLeauge = ( league ) => {
    return(dispatch, getState) => {
        //make asyn call to database
        dispatch({type: 'CREATE_LEAGUE', league})
    }
}

export default createLeauge