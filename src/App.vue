<template>
  <div id="app"><RadioLabel :labels="labelItem" /></div>
</template>

<script>
import RadioLabel from "./components/RadioLabel.vue";
export default {
  name: "App",
  components: {
    RadioLabel,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
