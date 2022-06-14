<template>
  <h2>Componente Car</h2>
  <p>Marca: {{ brand }}</p>
  <ul>
    <template v-for="(power, index) in powers" :key="index">
      <li v-if="power >= 150">v-if: {{ power }}</li>
      <li v-else-if="power === 100">v-else-if: {{ power }}</li>
      <li v-else>v-else: {{ power }}</li>
    </template>
  </ul>
  <h3>{{ power }}</h3>
  <button @click="upPower()">Aumentar Power</button>
  <button @click="downPower()">Bajar Power</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const brand = "Audi";
    const powers = [50, 100, 150, 200, 250];
    let power = ref(50);

    const upPower = () => {
      power.value++;
      console.log("Power ", power.value, "Aumentar potencia ...");
    };
    const downPower = () => {
      power.value--;
      console.log("Power ", power.value, "Bajar potencia ...");
    };

    return {
      brand,
      powers,
      upPower,
      downPower,
      power,
    };
  },
};
</script>
