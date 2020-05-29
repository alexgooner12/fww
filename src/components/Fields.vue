<template>
  <div class="fields">
      <div v-for="(el, i) in fields" :key="i">
        <span 
            v-html="el.label" 
            :class="{'disabled' : el.disabled}" 
        />
        <span v-if="isChanging && !el.disabled">
          <arrow-up v-if="checkNumberPositivity(el.values[el.values.length - 1])" />
          <arrow-down v-else />
        </span>
        <p v-html="el.values[el.values.length - 1]" />
        <button 
          class="button"
          :class="el.disabled ? 'orange' : 'grey'" 
          @click="toggleFieldDisability(i)">
          {{ !el.disabled ? 'Disable' : 'Enable' }}
        </button>
      </div>
  </div>
</template>

<script>
import _ from "lodash";
import ls from "../../mixins/ls.js";
import helpers from "../../mixins/helpers.js";
import ArrowUp from "./svg/arrow-up";
import ArrowDown from "./svg/arrow-down";

export default {
  name: 'Fields',
  data: () => ({
    fields: [],
    isChanging: false,
    isPaused: false
  }),

  mixins: [ls, helpers],

  components: {
    ArrowUp,
    ArrowDown
  },

  mounted() {
    this.isPaused = false;
    this.setStartingFields();
    this.run();
  },

  beforeDestroy() {
    this.isPaused = true;
  },

  methods: {
    run() {
        setInterval(() => {
            if (!this.isPaused) {
                this.updateFields()
            }
        }, 2000);
    },
    setStartingFields() {
        this.loadFromLocalStorage && (this.fields = this.loadFromLocalStorage) || 
        (this.fields = this.createDefaultFields());
    },

    createDefaultFields() {
        return Array.from(new Array(10), (el, i) => Object.assign({}, { label: this.labels[i], values: ['3'], disabled: false }));
    },

    saveToLocalStorage() {
        localStorage.setItem('fields', JSON.stringify(this.fields));
    },

    updateFields() {
        this.isChanging = true;
        this.fields = _.map(this.fields, el => {
            if (!el.disabled) return Object.assign({}, { ...el, values: [...el.values, this.createFieldValue()] });
            return el;
        });
        this.saveToLocalStorage();
    },

    toggleFieldDisability(i) {
        this.fields = _.map(this.fields, (el, index) => { 
            if (i == index) el.disabled = !el.disabled;
            return el;
        });
    },

    createFieldValue() {
        return `${this.createRandomMathSign()}${this.createRandomNumber()}`;
    },

    createRandomMathSign() {
        return _.sample([true, false]) ? '+' : '-';
    },

    createRandomNumber() {
        return (Math.random() * 2 + 1).toFixed(2);
    },
  },

  computed: {
    labels() {
        return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";

.fields {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>
