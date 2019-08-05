const initState = {
    results: [],
    title: "",
    activePage: 1,
    searching: false,
    numResults: 1,
}
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "GET_RESULTS":
            return{
                results: action.payload,
                title: action.title,
                activePage: action.activePage,
                searching: true,
                numResults: action.numResults
            }
        case "ERROR":
            return state
        default:
            return state
    }
}

export default rootReducer