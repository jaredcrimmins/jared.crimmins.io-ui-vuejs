<template>
  <div class="the-greeting">
    <div class="the-greeting__wrapper">
      <h1>Jared Crimmins</h1>
      <h2>Software Developer</h2>
    </div>
  </div>
</template>

<style lang="scss">
  .the-greeting {
    width: 100%;

    h1 {
      color: rgba(255, 255, 255, 0.8);
      font-weight: normal;
      margin: 0 0 8px 0;
    }

    h2 {
      color: #3C91E6;
      font-weight: normal;
      margin: 8px 0 0 0;
    }

    &__wrapper {
      max-width: 800px;
    }

    @media (min-width: 1025px) {
      h1 {
        font-size: 29px;
        letter-spacing: 0.25px;
      }

      h2 {
        font-size: 41px;
        letter-spacing: 0;
      }

      &__wrapper {
        padding: 0 13px;
        width: calc(100% - 26px);
      }
    }

    @media (max-width: 1024px) {
      h1 {
        font-size: 21px;
        letter-spacing: 0;
      }

      h2 {
        font-size: 29px;
        letter-spacing: 0.25px;
      }

      &__wrapper {
        padding: 0 40px;
        width: calc(100% - 80px);
      }
    }
  }
</style>
