<template>
  <div class="home">
    <h2 class="color-red">Welcome to Random Number App</h2>
      <Fields />
  </div>
</template>

<script>
import Fields from "./Fields";

export default {
  name: 'Home',

  components: {
    Fields
  }
}
</script>

<style lang="scss" scoped>
.home {
  h2 {
    padding-bottom: 3rem;
  }
}
</style>
