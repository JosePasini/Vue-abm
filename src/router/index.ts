import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "../App.vue";
import ContactView from "../views/ContactView.vue";
import ListaView from "../views/ListaView.vue";
import FormularioView from "../views/FormularioView.vue";
import CardView from "../views/CardView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: App,
  },
  {
    path: "/",
    name: "home",
    component: ContactView,
  },
  {
    path: "/lista",
    name: "lista",
    component: ListaView,
  },
  {
    path: "/formulario",
    name: "formulario",
    props: false,
    component: FormularioView,
  },
  {
    path: "/formulario/:id",
    name: "formulario-id",
    props: true,
    component: FormularioView,
  },
  {
    path: "/card/",
    name: "card",
    component: CardView,
  },
  {
    path: "/card/:id",
    name: "card-id",
    props: true,
    component: CardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
