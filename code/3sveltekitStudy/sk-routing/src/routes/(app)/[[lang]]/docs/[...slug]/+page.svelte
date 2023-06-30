<script>
  import { page } from '$app/stores';
  console.log($page.params.slug);

  const slugArr = $page.params.slug.split('/');
  console.log(slugArr)

  console
  console.log($page.params);
  const { lang = 'ko' } = $page.params;

</script>

{#if lang === 'ko'}
  <h1>안녕</h1>
{:else if lang === 'en'}
  <h1>hello</h1>
{:else if lang === 'ja'}
  <h1>일본어</h1>
  
{/if}

<hr/>
<h1>Doce 페이지</h1>

<!-- 스벨트문법 -->

{#if slugArr.length === 1}
<h1>Docs 페이지 ; 주제 {slugArr[0]}</h1>
{:else if slugArr.length === 2}
<h1>Docs 페이지 ; 주체 {slugArr[0]} ; 소주제 {slugArr[1]}</h1>
{/if}