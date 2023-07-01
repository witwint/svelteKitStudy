export const load = async (serverloadEvent) => {
  console.log("server load 함수 실행됨")
  const {fetch} = serverloadEvent;
  const response = await fetch("http://localhost:4000/products");
  const products = await response.json();

  return {
    products
  };
};