import jsonPlaceHolder from "../api/jsonPlaceHolder"
import _ from "lodash"
import React, { useMemo } from "react";

//action creator
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
}


export const fetchUser = (id) => dispatch => _fetchedUser(id, dispatch);

//memoized function
const _fetchedUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
})
