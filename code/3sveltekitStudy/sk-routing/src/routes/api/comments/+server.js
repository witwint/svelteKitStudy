import{ json } from '@sveltejs/kit'

import {comments} from '$lib/comments'

export function GET() {
  return json(comments);
}

//import{ json } from '@sveltejs/kit' 이거 추가해서 아래 처럼 안써도됨
// export function GET() {
//   return new Response(JSON.stringify(comments), {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
// }

export async function POST(requestEvent) {
  const {request} = requestEvent;
  const { text } = await request.json();
  const newCommnet = {
    id: comments.length +1,
    text 
  };
  comments.push(newCommnet);

  //return new Response(JSON.stringify(newCommnet),{ status: 201});
  return json(newCommnet, {status: 201});
}