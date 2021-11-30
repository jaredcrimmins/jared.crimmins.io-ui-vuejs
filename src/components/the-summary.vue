<template>
  <div class="the-summary">
    <p>A full-stack software developer building quality web applications and libraries in the Greater Chicago Area.</p>
  </div>
</template>

<style lang="scss">
  .the-summary {
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 28px;
    margin: 16px 0;
  }

  @media (min-width: 1025px) {
    .the-summary {
      padding: 0 13px;
      width: calc(100% - 26px);
      max-width: 800px;
    }
  }

  @media (max-width: 1024px) {
    .the-summary {
      padding: 0 40px;
      width: calc(100% - 80px);
    }
  }
</style>
