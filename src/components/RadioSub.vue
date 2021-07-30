<template>
  <div class="app">
    <h3>
      <b>Subcomponents!</b>
    </h3>
    <div class="radio">
      <!-- subcomponent input text -->
      <span class="radio-items">
        <input
          type="radio"
          required
          name="inputText"
          v-model="radioName"
          :value="message"
        />
        <label for="inputText">
          <input type="text" v-model="message" placeholder="Hey!" />
        </label>
      </span>

      <!-- subcomponent input date -->
      <span class="radio-items">
        <input
          type="radio"
          required
          name="inputDate"
          v-model="radioName"
          :value="birthdate"
        />
        <label for="inputDate">
          <input type="date" v-model="birthdate" />
        </label>
      </span>

      <!-- subcomponent input checkbox -->
      <span class="radio-items">
        <input
          type="radio"
          required
          name="inputCheckbox"
          v-model="radioName"
          :value="checkedFruits"
        />

        <label for="inputCheckbox">
          <input
            type="checkbox"
            id="apple"
            value="apple"
            v-model="checkedFruits"
          />
          <label for="apple">Apple</label>
          <input
            type="checkbox"
            id="orange"
            value="orange"
            v-model="checkedFruits"
          />
          <label for="orange">Orange</label>
          <input
            type="checkbox"
            id="guava"
            value="guava"
            v-model="checkedFruits"
          />
          <label for="guava">Guava</label>
        </label>
      </span>

      <!-- subcomponent input select options -->
      <span class="radio-items">
        <input
          type="radio"
          required
          name="inputSelect"
          v-model="radioName"
          :value="selected"
        />
        <label for="inputSelect">
          <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
          </select>
        </label>
      </span>
    </div>
    <h4>
      {{ radioName }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "RadioSub",
  data() {
    return {
      radioName: "",
      checkedFruits: [],
    };
  },
};
</script>


<style scoped>
.app {
  margin: auto;
  width: 15vw;
  padding: 2.5rem;
  background-color: #efefef;
}
.radio {
  align-items: flex-start;
  flex-direction: column;
}

.radio-items {
  display: inline;
  margin: 0.5rem 0rem;
}
</style>