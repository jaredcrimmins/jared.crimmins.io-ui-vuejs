<template>
  <div class="the-hero">
    <div class="the-hero__wrapper">
      <div class="the-hero__section1">
        <the-greeting />
      </div>
      <the-summary />
      <the-social-media-bar />
    </div>
  </div>
</template>

<script lang="ts">
  import TheGreeting from './the-greeting.vue';
  import TheSocialMediaBar from './the-social-media-bar.vue';
  import TheSummary from './the-summary.vue';
  import Vue from 'vue';

  export default Vue.extend({
    components: {
      TheGreeting,
      TheSocialMediaBar,
      TheSummary
    }
  });
</script>

<style lang="scss">
  .the-hero {
    display: flex;
    height: 100vh;
    width: 100%;

    &__wrapper {
      margin: auto;
    }

    &__section1 {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 1024px) {
      &__wrapper {
        max-width: 760px;
      }
    }

    @media (min-width: 1025px) {
      &__wrapper {
        max-width: 100%;
        width: 800px;
      }
    }
  }
</style>
