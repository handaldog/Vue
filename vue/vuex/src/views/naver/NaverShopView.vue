<template>
  <div>
    쇼핑
    <input type="text" v-model="keyword" @keyup.enter="search" />
    <table>
      <tr>
        <td>이미지</td>
        <td>상품명</td>
        <td>가격</td>
        <td>사러가기</td>
      </tr>
      <tr v-for="item in shopItems" :key="item.productid">
        <td>{{ item.image }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.lprice }}</td>
        <td>{{ item.link }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      keyword: "",
    };
  },
  created() {},
  methods: {
    search() {
      // vuex한테 부탁하는 것임.액션에 sNS좀 실행시켜달라고.
      // this.$store.dispatch("searchNaverShop", this.keyword);
      this.searchNaverShop(this.keyword);
    },
    ...mapActions(["searchNaverShop"]),
  },
  computed: {
    shopItems() {
      ///이렇게 state에 있는 거 일일히 들고오는 거 귀찮아.
      // 내 로컬 data로 저장안하고 항상 vuex에서 꺼내다 쓰는 데이터
      return this.$store.state.shopList;
    },
    ...mapState(["shopList", "newsList"]),
  },
};
</script>

<style scoped></style>
