<template>
  <div class="chart">
    <table id="q-graph">
      <thead>
        <tr class="color-white">
          <th></th>
          <th class="pos">Positive</th>
          <th class="neg">Negative</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          class="qtr" id="q1" v-for="(label, i) in labels" 
          :key="i" 
          :style="`left: ${isMobileOrTablet ? 20 * i : 10 * i}%`">
          <th scope="row" v-html="label"></th>
          <td
            class="pos bar"
            :style="`height: ${positiveValues[i].percentage}`"
          >
            <p class="color-white"> 
              {{ amountsOfPositiveValues[i] | roundUp }}
            </p>
          </td>
          <td
            class="neg bar"
            :style="`height: ${negativeValues[i].percentage}`"
          >
            <p class="color-white">
              {{ amountsOfNegativeValues[i] | roundUp }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <div id="ticks">
      <div class="tick">
      </div>
      <div class="tick">
      </div>
      <div class="tick">
      </div>
      <div class="tick">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: [
    "labels", 
    "amountsOfPositiveValues", 
    "amountsOfNegativeValues", 
    "negativeValues", 
    "positiveValues"
  ],

  filters: {
    roundUp(val) {
      if (val) {
        const num = +val;
        return num.toFixed(2);
      }
    }
  },

  computed: {
    isMobileOrTablet() {
      return screen.width <= 1024;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/css/variables.scss";

$color-paid: #7fdbff;
$color-sent: #39cccc;

.chart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "fira-sans-2", Verdana, sans-serif;
  height: 65vh;

  @media screen and (max-width: 1024px) {
    display: inline-flex;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
  }
}

#q-graph {
  display: block;
  position: relative;
  width: 100vw;
  height: 100%;
  margin: 1.1em 0 0;
  padding: 0;
  background: transparent;
  font-size: 11px;
}

#q-graph caption {
  caption-side: top;
  width: 10vw;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  top: -40px;
  position: relative;
  z-index: 10;
  font-weight: bold;
}

#q-graph tr,
#q-graph th,
#q-graph td {
  position: absolute;
  bottom: 0;
  width: 10vw;
  min-width: 50px;
  z-index: 2;
  margin: 0;
  padding: 0;
  text-align: center;
}

#q-graph td {
  transition: all 0.3s ease;

  &:hover {
    background-color: desaturate(#85144b, 100);
    opacity: 0.9;
    color: white;
  }
}

#q-graph thead {
  @media screen and (max-width: 1024px) {
    display: none;
  }
}

#q-graph thead tr {
  left: 100%;
  top: 50%;
  bottom: auto;
  margin: -2.5em 0 0 5em;
}
#q-graph thead th {
  width: 7.5em;
  height: auto;
  padding: 0.5em 1em;
}
#q-graph thead th.sent {
  top: 0;
  left: 0;
  line-height: 2;
}
#q-graph thead th.paid {
  top: 2.75em;
  line-height: 2;
  left: 0;
}

#q-graph tbody tr {
  height: 296px;
  padding-top: 2px;
  border-right: 1px dotted #c4c4c4;
  color: #aaa;
}
#q-graph #q1 {
  left: 0;
}
#q-graph #q2 {
  left: 150px;
}
#q-graph #q3 {
  left: 300px;
}
#q-graph #q4 {
  left: 450px;
  border-right: none;
}
#q-graph tbody th {
  bottom: -1.75em;
  vertical-align: top;
  font-weight: normal;
  color: #333;
}
#q-graph .bar {
  width: 40px;
  border: 1px solid;
  border-bottom: none;
  color: #000;
}
#q-graph .bar p {
  margin: 5px 0 0;
  padding: 0;
  opacity: 0.4;
}
#q-graph .pos {
  // left: 13px;
  background-color: $color-sent;
  border-color: transparent;
  left: 25%;
  transform: translateX(-50%);
}
#q-graph .neg {
  background-color: $red;
  border-color: transparent;
  right: 25%;
  transform: translateX(50%);
}

#ticks {
  position: relative;
  top: -300px;
  left: 2px;
  width: 3000px;
  min-width: 100vw;
  min-height: 350px;
  z-index: 1;
  margin-bottom: -300px;
  font-size: 10px;
  font-family: "fira-sans-2", Verdana, sans-serif;

  @media (max-width: 991px) {
    width: 2000px;
  }

  @media (max-width: 576px) {
    max-width: 1000px;
  }
}

#ticks .tick {
  position: relative;
  border-bottom: 1px dotted #c4c4c4;
  height: 60px;
}

#ticks .tick p {
  position: absolute;
  left: -5em;
  top: -0.8em;
  margin: 0 0 0 0.5em;
}
</style>
