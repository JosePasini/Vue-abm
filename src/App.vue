<template>
  <NavBar />
  <!-- <CardView /> -->
  <router-view />
</template>

<script>
import NavBar from "./views/NavBar.vue";
// import CardView from "./views/CardView.vue";

export default {
  components: {
    NavBar,
    // CardView,
  },

  methods: {
    saludar() {
      console.log("App running...");
    },
  },
  beforeMount() {
    this.saludar();
    console.log("WEEEY;");
  },
  data() {
    return {};
  },
};
</script>

<style>
h1 {
  background-color: aqua;
}
</style>
