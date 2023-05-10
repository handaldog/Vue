<template>
  <table border="1">
    <tr>
      <td>제목</td>

      <td>저자</td>

      <td>가격</td>

      <td>내용</td>
    </tr>

    <tr>
      <td>{{ book.title }}</td>

      <td>{{ book.author }}</td>

      <td>{{ book.price }}</td>

      <td>{{ book.content }}</td>
      <button type="button" v-on:click="remove">삭제</button>
      <button @click="$router.push({ name: 'bookmodify', params: { isbn: book.isbn } })">수정</button>
    </tr>
  </table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      author: "",
      price: "",
      content: "",
      book: {},
    };
  },

  methods: {
    remove() {
      axios.delete("http://192.168.214.40:9999/vuews/book/" + this.$route.params.isbn).then(() => {
        alert("삭제되었습니다.");
      });
    },
  },

  created() {
    axios.get("http://192.168.214.40:9999/vuews/book/" + this.$route.params.isbn).then((resp) => {
      this.book = resp.data;
    });
  },

  // watch: {
  //   isbnn() {
  //     axios.get("http://192.168.214.40:9999/vuews/book/" + this.isbnn).then((resp) => {
  //       this.book = resp.data;
  //     });
  //   },
  //   // modify() {
  //   //   this.book ={
  //   //     isbn :
  //   //   }
  //   //   axios.put("http://192.168.214.40:9999/vuews/book/" + this.isbnn, this.book);
  //   // },
  // },
};
</script>

<style scoped></style>
