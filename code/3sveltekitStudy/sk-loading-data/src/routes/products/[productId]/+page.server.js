export const load = async (serverloadEvent) => {
  const {fetch, params, url, route} = serverloadEvent;
  const { productId } = params
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const product = await response.json();

  return {
    product
  };
};