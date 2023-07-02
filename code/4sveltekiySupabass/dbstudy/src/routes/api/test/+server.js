import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export async function POST(requestEvent) {
  const { request } = requestEvent;
  const { name, price } = await request.json(); // await 추가
  console.log(name,price)

  const { data, error } = await supabase
    .from('test')
    .insert([{ test_product:name, test_price:price }]);

  if (error) {
    console.error('Error creating product:', error);
  } else {
    console.log('Product created successfully:', data);
  }
  
  return json({ message: 'success' }, { status: 201 }); // json 함수 인자 수정
}