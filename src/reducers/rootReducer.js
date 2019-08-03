const initState = {
    results: [],
    title: "",
    searching: false
}
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "GET_RESULTS":
            return{
                results: action.payload,
                title: action.title,
                searching: true
            }
        case "ERROR":
            return state
        default:
            return state
    }
}

export default rootReducer