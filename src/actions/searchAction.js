import axios from "axios"

export const searchPages = (title, activePage) => async dispatch => {
    try {
        const res = await axios.get(`http://openlibrary.org/search.json?title=${title}&page=${activePage}`);
        dispatch({
            type: "GET_RESULTS",
            title,
            activePage,
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