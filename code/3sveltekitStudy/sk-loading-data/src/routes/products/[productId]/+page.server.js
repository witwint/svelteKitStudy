import { error, redirect } from '@sveltejs/kit';


export const load = async (serverloadEvent) => {
  const {fetch, params, url, route} = serverloadEvent;
  const { productId } = params

  // //에러 설정
  // if (productId > 3) {
  //   throw error(404, 'Product not found');
  // }

    //리다이렉트 설정
    if (productId > 3) {
      throw redirect(307, '/products');
    }



  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const product = await response.json();

  return {
    product
  };
};