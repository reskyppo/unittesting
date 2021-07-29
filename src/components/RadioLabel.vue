<template>
  <div class="app">
    <h3>
      <b>Name</b>
    </h3>
    <div class="radio">
      <div v-for="label in labels" :key="label.name">
        <label>
          <input
            type="radio"
            required
            name="radioName"
            v-model="radioName"
            :value="label.name"
          />{{ label.name }}
        </label>
      </div>
    </div>
    <h4>
      {{ radioName }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "RadioLabel",
  props: {
    labels: Array,
  },
  data() {
    return {
      radioName: "",
    };
  },
};
</script>

<style >
.app {
  margin: auto;
  width: 15vw;
  padding: 2.5rem;
  background-color: #f1ecc3;
}
.radio {
  display: flex;
  align-items: center;
}
</style>