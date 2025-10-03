import { setPostData } from "./set-post-data";
import { request } from "../utils/request";

export const loadPostAsync = (postId) => (dispatch) =>
    request(`/api/posts/${postId}`).then(({ error, data }) => {
        if (data) {
            dispatch(setPostData(data));
        }

        return error;
    });
