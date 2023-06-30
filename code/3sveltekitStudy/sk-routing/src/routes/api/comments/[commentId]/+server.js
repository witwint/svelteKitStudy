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

export async function PATCH(requestEvent) {
  const { params, request} = requestEvent;
  const { commentId } = params;
  const { text } = await request.json();

  //db에서 비즈니스 로직 수행 (db의 어떤 특정 댓글의 내용을 수정한다.)

  const findedComment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  )
  findedComment.text = text;

  return json(findedComment);
}

export async function DELETE(requestEvent) {
  const { params } = requestEvent;
  const { commentId } = params;

  const deletedComment = comments.find((comment) => comment.id === parseInt(commentId))
  const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
  comments.splice(index, 1); //비즈니스 로직 (삭제)
  return json(deletedComment);
}