import axios from "axios"

export const searchTitle = (title) => async dispatch => {
    try {
        const res = await axios.get(`http://openlibrary.org/search.json?title=${title}`);

        dispatch({
            type: "GET_RESULTS",
            title,
            payload: res.data.docs
        });
    } catch (err) {
        dispatch({
            type: "ERROR",
            payload: err
        });
    }
};