<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <the-header-nav></the-header-nav>
    <router-view />
    <back-ground></back-ground>
  </div>
</template>

<script>
import TheHeaderNav from "@/components/TheHeaderNav";
import BackGround from "@/components/BackGround";

export default {
  components: { TheHeaderNav, BackGround },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
