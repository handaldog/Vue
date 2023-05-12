<template>
  <div>
    <h2>네이버 검색 뷰</h2>
    <select v-model="category">
      <option value="NaverBlogView">블로그</option>
      <option value="NaverShopView">쇼핑</option>
      <option value="NaverNewsView">뉴스</option>
    </select>

    <router-link :to="`/naver/${category}`">선택</router-link>
    <router-link :to="{ name: 'NaverBlogView' }">블로그 검색 |</router-link>
    <router-link :to="{ name: 'NaverShopView' }">쇼핑 검색 |</router-link>
    <router-link :to="{ name: 'NaverNewsView' }">뉴스 검색</router-link>

    <!-- 전체 라우터뷰 말고 네이버검색 view 하위에 있는 라우터 뷰 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
