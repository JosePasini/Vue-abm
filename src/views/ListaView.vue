<template>
  <h4>ListaView</h4>
  <div className="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Instrumento</th>
          <th scope="col">Marca</th>
          <th scope="col">Modificar</th>
          <th scope="col">Eliminar</th>
          <th scope="col">Detalles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(instrumento, id) in this.dataApp" :key="id">
          <th scope="row">{{ instrumento.id }}</th>
          <td>{{ instrumento.instrumento }}</td>
          <td>{{ instrumento.marca }}</td>

          <td>
            <router-link
              :to="{ name: `formulario-id`, params: { id: instrumento.id } }"
            >
              <button className="btn btn-primary">Modificar</button>
            </router-link>
          </td>

          <td>
            <button
              class="btn btn-danger"
              @click="borrarInstrumento(instrumento.id)"
            >
              Eliminar
            </button>
          </td>
          <td>
            <a :href="'http://localhost:8080/instrumento/' + instrumento.id"
              ><button class="btn btn-success">Ver Detallessssss</button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object },
  },

  methods: {
    async borrarInstrumento(id) {
      alert("Se borrará el instrumento con id", id);
      if (id) {
        const url = `http://localhost:8080/instrumento/${id}`;
        const resp = await fetch(url, { method: "DELETE" });
        alert(resp);
      }
    },
    async buscarData() {
      const url = "http://localhost:8080/instrumento/getAll";
      const data = await fetch(url);
      const resp = await data.json();
      this.dataApp = resp;
      console.log("this.data", this.dataApp);
    },
  },
  beforeMount() {
    this.buscarData();
  },
  data() {
    return {
      dataApp: [],
    };
  },
};
</script>

<style></style>
