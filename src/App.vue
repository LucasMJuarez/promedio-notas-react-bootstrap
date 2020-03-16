<template>
  <div id="app" class="container">
    <Cabecera></Cabecera>
    <Lista></Lista>
    <Footer></Footer>
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import Lista from "./components/Lista.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Cabecera,
    Lista,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 50px;
}
</style>
