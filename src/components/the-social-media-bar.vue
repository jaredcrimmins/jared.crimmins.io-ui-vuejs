<template>
  <div class="the-social-media-bar">
    <div class="the-social-media-bar__content">
      <a href="https://github.com/jaredcrimmins">
        <img
          src="~/assets/images/logos/github-mark-light.png"
          alt="GitHub logo"
        >
      </a>
      <a href="https://linkedin.com/in/jaredcrimmins">
        <img
          src="~/assets/images/logos/linkedin-logo.png"
          alt="LinkedIn logo"
          style="filter: brightness(0) invert(1);"
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  .the-social-media-bar {
    width: 100%;

    &__content {
      column-gap: 16px;
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    a {
      display: flex;
      height: 30px;
      width: 30px;
    }

    img {
      height: 24px;
      margin: auto;
      opacity: 0.8;
    }

    @media (max-width: 1024px) {
      padding: 0 30px;
      width: calc(100% - 80px);

      a {
        height: 48px;
        width: 48px;
      }
    }

    @media (min-width: 1025px) {
      padding: 0 13px;
      width: calc(100% - 26px);
    }
  }
</style>
