<template>
  <div class="container">
    <div class="card" v-if="currentStep === 'language'">
      <h3>What language do you want to learn ?</h3>
      <div>
        <label for="english">
          <input
            type="checkbox"
            id="english"
            value="English"
            v-model="languages"
          />
          English
        </label>
        <label for="chinese">
          <input
            type="checkbox"
            id="chinese"
            value="Chinese"
            v-model="languages"
          />
          Chinese
        </label>
        <label for="korean">
          <input
            type="checkbox"
            id="korean"
            value="Korean"
            v-model="languages"
          />
          Korean
        </label>
        <label for="spanish">
          <input
            type="checkbox"
            id="spanish"
            value="Spanish"
            v-model="languages"
          />
          Spanish
        </label>
        <label for="japanese">
          <input
            type="checkbox"
            id="japanese"
            value="Japanese"
            v-model="languages"
          />
          Japanese
        </label>
      </div>
      <div class="btn-wrapper">
        <button @click="onPrev">Prev</button>
        <button @click="onNext">Next</button>
      </div>
    </div>

    <div class="card" v-if="currentStep === 'age'">
      <h3>How old are you ?</h3>
      <div>
        <label for="young">
          <input type="checkbox" id="young" value="young" v-model="ages" />
          Below 10
        </label>
        <label for="middle">
          <input type="checkbox" id="middle" value="middle" v-model="ages" />
          11 - 30
        </label>
        <label for="old">
          <input type="checkbox" id="old" value="old" v-model="ages" />
          Above 31
        </label>
      </div>
      <div class="btn-wrapper">
        <button @click="onPrev">Prev</button>
        <button @click="onNext">Next</button>
      </div>
    </div>

    <div class="card" v-if="currentStep === 'final'">
      <h4>Ages</h4>
      <div>{{ ages }}</div>
      <hr />
      <h4>Languages</h4>
      <div>{{ languages }}</div>
      <div class="btn-wrapper">
        <button @click="onPrev">Prev</button>
        <button @click="onNext">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      ages: [],
      languages: [],
      step: 1,
    };
  },
  computed: {
    currentStep({ step }) {
      if (step === 1) return "language";
      if (step === 2) return "age";
      return "final";
    },
  },
  methods: {
    onPrev() {
      this.step -= 1;
    },
    onNext() {
      this.step += 1;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 5px auto;
  width: 500px;
  border: 1px solid;
  padding: 10px;
}

.btn-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 30px 5px 10px 5px;
}

.btn-wrapper > button {
  width: 50px;
  height: 30px;
}

label {
  cursor: pointer;
}
</style>