<!-- 에러나면 자동으로 보이는 페이지 -->

<script>
  //각 컴포넌트들의 상태를 저장해두는곳 $app/stores 에서 page데이터 사용
  import { page } from '$app/stores'
</script>


<h1>상품이 존재하지 않습니다.</h1>

<h3>{$page.status} : {$page.error.message}</h3>