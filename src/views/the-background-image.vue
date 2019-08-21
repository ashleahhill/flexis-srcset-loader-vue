<template>
  <section class="the-background">
    <h1>
      The background of this section should be covered with a gray 1000px image.
    </h1>
  </section>
</template>
<script>

export default {
  name: 'the-background-image',
  data() {
    return {
      image: null,
      srcset: [],
    };
  },
};
</script>
<style lang="scss" scoped>

.the-background {
  height: 50vh;
  background-color: pink;
  background-size: cover;
  background-position: center center;
  background-image: url('./../assets/examples/1000.png')
}
</style>
