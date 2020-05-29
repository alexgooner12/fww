<template>
      <nav class="navigation">
        <ul class="navigation__list">
            <li v-for="(page,i) in pages" :key="i" class="navigation__item line-link shrink">
                <router-link :to="page.url" v-html="page.title" class="navigation__link" :class="{'exact-active' : page === currentPage}" />
            </li>
        </ul>
        <span class="navigation__logo">
            <a class="color-white" href="/">FACTORY
                <span>WORLD WIDE</span>
            </a>
        </span>
      </nav>
</template>

<script>
import _ from "lodash";

export default {
  name: 'Navigation',

  mounted() {
  },

  computed: {
    routes() {
        return _.get(this.$router, "options.routes");
    },

    pages() {
        return _.map(this.routes, el => Object.assign({}, { url: el.path, title: _.get(el, "component.name") }));
    },

    currentPage() {
        return this.$route.path;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";
@import "../assets/css/colors.scss";

.navigation {
    min-height: 10vw;
    background-color: $darkGrey;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    &__list {
        list-style: none;
        display: flex;
    }

    &__item {
        &:not(:last-child) {
            padding-right: 1rem;
        }
    }

    &__link {
        text-decoration: none;
        color: $white;
        font-weight: 300;

        &:hover {
            color: $red;
        }

        &.exact-active {
            color: $red !important;
        }
    }

    &__logo {
        color: $white;
        text-decoration: none;   

        & span {
            color: $red;
        }
    }
}
</style>
