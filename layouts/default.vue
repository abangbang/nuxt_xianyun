<template>
  <div>
    <!-- 内容占位 -->
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* 全局样式 */
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: #333;
}
em,i{
  font-style: normal;
}
</style>
