import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export function GET(requestEvent) {
  const { params } = requestEvent;
  const { commentId } = params;

  const findedComment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  )

  return json(findedComment);
}