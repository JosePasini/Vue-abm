<template>
  <div id="form-input" class="container">
    <h4>Formulario</h4>
    <div class="form-group">
      <label for="instrumento">Instrumento</label>
      <input type="text" id="jack" v-model="instrumento" />
    </div>

    <div class="form-group">
      <label for="marca">Marca</label>
      <input type="text" id="marca" v-model="marca" />
    </div>

    <div class="form-group">
      <label for="precio">Precio</label>
      <input type="number" id="precio" v-model.number="precio" />
    </div>

    <div class="form-group">
      <button class="btn btn-primary" @click="subirForm">Cargar Datos</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      instrumento: null,
      marca: null,
      precio: null,
    };
  },

  methods: {
    async subirForm() {
      try {
        console.log("idParam:", this.$route.params.id);
        const idParam = Number(this.$route.params.id);
        const url = "http://localhost:8080/instrumento";

        if (idParam) {
          const instrumento = {
            id: idParam,
            instrumento: this.instrumento,
            marca: this.marca,
            precio: this.precio,
          };
          const resp = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(instrumento),
          });
          this.statusResponse(resp.status);
        } else {
          const instrumento = {
            instrumento: this.instrumento,
            marca: this.marca,
            precio: this.precio,
          };
          const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(instrumento),
          });
          alert(resp.status);
        }
      } catch (error) {
        alert(error);
      }
    },
    statusResponse(status) {
      if (status >= 200 && status <= 300) {
        alert("Instrumento creado satisfactoriamente", status);
      } else {
        alert("Error al intentar cargar instrumento");
      }
    },
  },
};
</script>

<style>
#form-input {
  align-items: center;
  align-content: center;
}
</style>
