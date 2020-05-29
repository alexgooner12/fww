<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>

import Navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";
@import "@/assets/css/colors.scss";
@import "@/assets/css/general.scss";
@import "@/assets/css/btn.scss";

#app {
  text-align: center;
}

</style>
