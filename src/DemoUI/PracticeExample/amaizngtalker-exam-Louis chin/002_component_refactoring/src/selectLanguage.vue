<template>
    <div class="card">
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
</template>

<script>
export default {
  name: "selectLanguage",
  components: {},
  data: function () {
    return {
      languages: [],
      //watchNow: Date.now()
    };
  },
  // props: {
  //   inputlanguages: {
  //     type: Array,
  //     default: null
  //   }
  // },
  computed: {
  },
  methods: {
    onPrev() {
      console.log('onPrev2',this.languages);
      this.$emit('onPrev');
      this.$emit('setLanguages',this.languages);
    },
    onNext() {
      console.log('onPrev2',this.languages);
      this.$emit('onNext');
      this.$emit('setLanguages',this.languages);
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