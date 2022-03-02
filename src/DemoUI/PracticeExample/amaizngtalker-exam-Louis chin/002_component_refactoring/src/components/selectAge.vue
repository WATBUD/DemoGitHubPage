<template>
    <div class="card">
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
</template>

<script>
export default {
  name: "selectAge",
  components: {},
  data: function () {
    return {
      ages: [],
    };
  },
  computed: {
  },
  methods: {
    onPrev() {
      console.log('onPrev2',this.ages);
      this.$emit('onPrev');
      this.$emit('setAges',this.ages);
    },
    onNext() {
      console.log('onPrev2',this.ages);
      this.$emit('onNext');
      this.$emit('setAges',this.ages);
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