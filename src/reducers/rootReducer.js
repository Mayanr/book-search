const initState = {
    results: [],
    title: "",
    page: 1,
    searching: false,
    numResults: 1
}
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "GET_RESULTS":
            // console.log(action)
            return{
                results: action.payload,
                title: action.title,
                page: action.page,
                searching: true,
                numResults: action.numResults
            }
        // case "GET_PAGES":
        //     console.log(action)
        //     return{
        //         ...state,
        //         totalPages: action.totalPages
        //     }
        case "ERROR":
            return state
        default:
            return state
    }
}

export default rootReducer