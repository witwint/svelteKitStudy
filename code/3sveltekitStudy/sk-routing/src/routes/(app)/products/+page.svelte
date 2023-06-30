<script>
  export let productId = 100;
</script>

<a href="/">home</a>

<h1>제품 리스트 페이지</h1>

<ul>
  <a href="/products/1"><li>제품1</li></a>
  <a href="/products/2"><li>제품2</li></a>
  <a href={`/products/${productId}`}><li>제품{productId}</li></a>
</ul>