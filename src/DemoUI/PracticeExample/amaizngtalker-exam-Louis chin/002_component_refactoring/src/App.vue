<template>
  <div class="container">
    <selectLanguage :inputlanguages="languages" @stepChange="currentStep" 
    @onPrev="onPrev"
    @onNext="onNext"
    @setLanguages="setLanguages"
    v-if="currentStep === 'language'">
    </selectLanguage>
    <selectAge @stepChange="currentStep" 
    @onPrev="onPrev"
    @onNext="onNext"
    @setAges="setAges"
    v-if="currentStep === 'age'">
    </selectAge>
    <div class="card" v-if="currentStep === 'final'">
      <h4>測驗結果</h4>
      <h4>Ages</h4>
      <div>{{ ages }}</div>
      <hr />
      <h4>Languages</h4>
      <div>{{ languages }}</div>
      <div class="btn-wrapper">
        <button @click="reloadPage">retest</button>
      </div>
    </div>

  </div>
</template>

<script>
import selectLanguage from './components/selectLanguage.vue';
import selectAge from './components/selectAge.vue';
export default {
  name: "App",
  components: {
    selectLanguage,
    selectAge
  },
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
    setAges(ages=[]) {
      this.ages=ages;
    },
    setLanguages(languages=[]) {
      this.languages=languages;
    },
    reloadPage(){
    location.reload();
    }

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