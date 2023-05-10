<template>
  <div>
    <br />
    ISBN :
    <input type="text" v-model="book.isbn" />
    <br />
    제목 :
    <input type="text" v-model="book.title" />
    <br />
    저자 :<input type="text" v-model="book.author" /><br />
    가격 :<input type="number" v-model="book.price" />
    <br />
    내용 :
    <input type="text" v-model="book.content" /><br />
    <button @click="modify">수정하기</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      book: {},
    };
  },
  methods: {
    modify() {
      this.book = {
        isbn: this.book.isbn,
        title: this.book.title,
        author: this.book.author,
        price: this.book.price,
        content: this.book.content,
      };
      axios.put("http://192.168.214.40:9999/vuews/book/" + this.book.isbn, this.book);
      this.$router.push({ name: "booklist" });
    },
  },
  created() {
    axios.get("http://192.168.214.40:9999/vuews/book/" + this.$route.params.isbn).then((resp) => {
      this.book = resp.data;
    });
  },
};
</script>

<style></style>
