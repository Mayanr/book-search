import axios from "axios"

// export const searchTitle = (title) => async dispatch => {
//     try {
//         const res = await axios.get(`http://openlibrary.org/search.json?title=${title}`);

//         dispatch({
//             type: "GET_RESULTS",
//             title,
//             payload: res.data.docs
//         });
//     } catch (err) {
//         dispatch({
//             type: "ERROR",
//             payload: err
//         });
//     }
// };

export const searchPages = (title, page) => async dispatch => {
    try {
        const res = await axios.get(`http://openlibrary.org/search.json?title=${title}&page=${page}`);
        dispatch({
            type: "GET_RESULTS",
            title,
            page,
            payload: res.data.docs,
            numResults: res.data.num_found
        });
    } catch (err) {
        dispatch({
            type: "ERROR",
            payload: err
        });
    }
};

// export const pageCount = (title) => async dispatch => {
//     const pages = 1;
//     const res= null;
//     try {
//         res = await axios.get(`http://openlibrary.org/search.json?title=${title}&page=${pages}`);
//     } catch (err){
//         console.log("there was an error")
//     }
//     if(res.data){
//         dispatch({
//             type: "GET_PAGES",
//             totalPages: pages    
//         })
//     } else {
//         console.log(res) 
//         dispatch({
//             type: "GET_PAGES",
//             totalPages: pages    
//         })
//     }
    // try {
    //     const res = await axios.get(`http://openlibrary.org/search.json?title=${title}&page=${pages}`);
    //     if(pages){
    //         pages=+1;
    //         console.log("number of pages are" , pages)
    //     }
    //     dispatch({
    //         type: "GET_PAGES",
    //         totalPages: pages
    //     });
    // }
    // catch (err) {
    //     dispatch({
    //         type: "ERROR",
    //         payload: err
    //     });
    // }
// }