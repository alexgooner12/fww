<template>
  <div class="statistics">
    <h2 class="color-red">Statistics</h2>
    <div v-if="fields">
      <Chart
        :labels="labels" 
        :amountsOfPositiveValues="amountsOfPositiveValues"
        :amountsOfNegativeValues="amountsOfNegativeValues"
        :positiveValues="positiveValues"
        :negativeValues="negativeValues" />
    </div>
    <h5 v-else class="color-grey">No data has been recorded yet</h5>
  </div>
</template>

<script>
import ls from "../../mixins/ls.js";
import helpers from "../../mixins/helpers.js";
import Chart from "./Chart";
import _ from "lodash";

export default {
  name: "Statistics",

  data: () => ({
    fields: [],
  }),

  components: {
     Chart
  },

  mixins: [ls, helpers],

  mounted() {
    this.fields = this.loadFromLocalStorage;
  },

  methods: {
    calcPercentage(a, b) {
      return `${b / a * 100}%`;
    }
  },

  computed: {
    labels() {
      return this.fields && _.map(this.fields, "label");
    },

    values() {
      return this.fields && _.map(this.fields, "values");
    },

    positiveValues() {
      return this.values && _.map(this.values, el => {
        const values = _.filter(el, j => this.checkNumberPositivity(j));
        const percentage = this.calcPercentage(el.length, values.length);
        return Object.assign({}, { percentage, values });
      });
    },

    negativeValues() {
      return this.values && _.map(this.values, el => {
        const values = _.filter(el, j => !this.checkNumberPositivity(j));
        const percentage = this.calcPercentage(el.length, values.length);
        return Object.assign({}, { percentage, values });
      });
    },

    amountsOfPositiveValues() {
      return this.values && _.map(this.values, el => _.reduce(_.filter(el, j => this.checkNumberPositivity(j) ), (sum, num) => +sum + +num ));
    },

    amountsOfNegativeValues() {
      return this.values && _.map(this.values, el => _.reduce(_.filter(el, j => !this.checkNumberPositivity(j)), (sum, num) => +sum + +num ));
    },
  }
};
</script>

<style lang="scss">
</style>
