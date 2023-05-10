<template>
  <div>
    책등록하는 곳
    <table border="1">
      <br />
      <h2>[책 등록하는 곳]</h2>
      <br />
      ISBN :
      <input type="text" v-model="isbn" />
      <br />
      제목 :
      <input type="text" v-model="title" />
      <br />
      저자 :<input type="text" v-model="author" /><br />
      가격 :<input type="number" v-model="price" />
      <br />
      내용 :
      <input type="text" v-model="content" /><br />

      <button type="button" v-on:click="regist">등록</button>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isbn: "",
      title: "",
      author: "",
      price: "",
      content: "",
      book: {},
    };
  },
  methods: {
    regist() {
      this.book = {
        isbn: this.isbn,
        title: this.title,
        author: this.author,
        price: this.price,
        content: this.content,
      };

      axios.post("http://192.168.214.40:9999/vuews/book", this.book);
      this.$router.push({ name: "booklist" });
    },
  },
};
</script>

<style scoped></style>
