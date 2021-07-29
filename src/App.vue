<template>
  <div id="app">
    <RadioLabel :labels="labelItem" />
    <RadioSub />
  </div>
</template>

<script>
import RadioLabel from "./components/RadioLabel.vue";
import RadioSub from "./components/RadioSub.vue";
export default {
  name: "App",
  components: {
    RadioLabel,
    RadioSub,
  },
  data() {
    return {
      labelItem: [
        { name: "Radio A" },
        { name: "Radio B" },
        { name: "Radio C" },
      ],
    };
  },
};
</script>

<style>
#app {
  margin: auto;
  width: 15vw;
  padding: 2.5rem;
}
</style>
