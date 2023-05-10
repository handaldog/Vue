<template>
  <table border="1">
    <button @click="$router.push({ name: 'bookcreate' })">책 등록하기</button>
    <tr>
      <td>ISBN</td>
      <td>제목</td>
      <td>저자</td>
      <td>가격</td>
      <td>내용</td>
    </tr>
    <tr v-for="book in books" :key="book.isbn">
      <!-- <td @click="detail(book.isbn)">{{ book.isbn }}</td> -->
      <td @click="$router.push({ name: 'bookdetail', params: { isbn: book.isbn } })">{{ book.isbn }}</td>

      <td>{{ book.title }}</td>
      <td>{{ book.author }}</td>
      <td>{{ book.price }}</td>
      <td>{{ book.content }}</td>
    </tr>
    <!-- <h1 v-else>[등록된 책이 없습니다.]</h1> -->
  </table>
</template>

<script>
import axios from "axios";

export default {
  components: {},

  data() {
    return {
      books: [],
    };
  },

  created() {
    axios.get("http://192.168.214.40:9999/vuews/book").then((resp) => (this.books = resp.data));
  },
  updated() {
    axios.get("http://192.168.214.40:9999/vuews/book").then((resp) => (this.books = resp.data));
  },

  methods: {},
};
</script>

<style scoped>
table {
  box-shadow: 4ch;
  background-color: skyblue;
}
</style>
