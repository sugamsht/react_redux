import jsonPlaceHolder from "../api/jsonPlaceHolder"

//action creator
export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
}

