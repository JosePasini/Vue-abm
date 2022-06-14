<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="(instrumento, id) in this.data" :key="id">
      <div class="card h-100">
        <img
          :src="'../assets/' + instrumento.imagen"
          class="card-img-top"
          :alt="'../assets/' + instrumento.imagen"
        />
        <div class="card-body">
          <h5 class="card-title">{{ instrumento.nombre }}</h5>
          <p class="card-text"><b>Marca:</b> {{ instrumento.marca }}</p>
          <p class="card-text"><b>Precio:</b> {{ instrumento.precio }}</p>
          <p class="card-text">{{ instrumento.descripcion }}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary">button</button>
          <a :href="'/formulario/' + instrumento.id"
            ><button class="btn btn-success">Editar</button>
          </a>
          <a :href="'/card/'"
            ><button
              class="btn btn-danger"
              @click="borrarInstrumento(instrumento.id)"
            >
              button
            </button>
          </a>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: null,
    instrumento: null,
  },
  methods: {
    async getAll() {
      const url = "http://localhost:8080/instrumento/getAll";
      const data = await fetch(url);
      const resp = await data.json();
      this.data = resp;
      console.log("this.data", this.data);
    },
    async borrarInstrumento(id) {
      alert(" DDDD Se borrará el instrumento con id", id);
      if (id) {
        const url = `http://localhost:8080/instrumento/${id}`;
        const resp = await fetch(url, { method: "DELETE" });
        alert(resp);
      }
    },
  },
  beforeMount() {
    this.getAll();
  },

  data() {
    return {
      data: [],
    };
  },
};
</script>

<style>
img {
  max-width: 300px;
  max-height: 300px;
}
</style>
