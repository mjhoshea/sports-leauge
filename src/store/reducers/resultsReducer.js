

const resultsReducer = (state = null, action) => {
    switch (action.type) {
        case 'ADD_RESULT':
            console.log('added')
            return state;
        case 'ADD_RESULT_ERROR':
            console.log('error', action.err)
            return state;
        default:
            return state
    }
}

export default resultsReducer