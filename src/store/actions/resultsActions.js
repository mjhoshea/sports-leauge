const addResult = (result) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        console.log(result)
        // firestore.collection('results').add({
        //     .
        // })
        firestore.collection('results').add({
            ...result,
            authorFirstName: 'mike',
            authorLastName: 'oshea',
            authorId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "ADD_RESULT", result })
        }).catch((err) => {
            dispatch({ type: "ADD_RESULT_ERROR", err })
        })

    }
};


export default addResult