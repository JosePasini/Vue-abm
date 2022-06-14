<template>
  <h2>Componente CarProps</h2>

  <h3>Power props: {{ power }}</h3>
  <button @click="upPower">Aumentar desde App</button>
  <button @click="downPower">Bajar desde App</button>
</template>

<script>
export default {
  props: {
    power: {
      type: Number,
      default: 40,
    },
    upPower: Function,
    downPower: Function,
  },
  setup() {
    const brand = "Audi";
    const powers = [50, 100, 150];

    return {
      brand,
      powers,
    };
  },
};
</script>
