<template>
  <h4>Lista Contact</h4>
  <ListaView :data="data" />
</template>

<script>
import ListaView from "./ListaView.vue";

export default {
  components: {
    ListaView,
  },

  methods: {
    async buscarData() {
      const url = "http://localhost:8080/instrumento/getAll";
      const data = await fetch(url);
      const resp = await data.json();
      this.data = resp;
      console.log("this.data", this.data);
    },
  },

  data() {
    return {
      data: [],
    };
  },

  beforeMount() {
    this.buscarData();
  },
};
</script>

<style></style>
