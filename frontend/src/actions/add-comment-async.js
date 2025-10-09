import { request } from "../utils/request";
import { addComment } from "./add-comment";

export const addCommentAsync = (postId, content) => async (dispatch) => {
    try {
        const response = await request(`/api/posts/${postId}/comments`, 'POST', { content });
        const newComment = response.data;
        dispatch(addComment(newComment));

        return newComment;
    } catch (err) {
        console.error("Failed to add comment:", err);
        throw err;
    }
};

