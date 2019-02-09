const initState =  {
    leagueTable: [
        {id: '1', name: 'michael', won: '9', lost: '1',  points: '3'},
        {id: '2', name: 'jinjin', won: '10000', lost: '0', points: '99'},
        {id: '3', name: 'bob', won: '0', lost: '100', points: '0'}

    ]
}

const leagueReducer = (state = initState , action) => {
    return state
}

export default leagueReducer