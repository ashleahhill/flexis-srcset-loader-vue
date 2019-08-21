<template>
  <section>
    <h1 v-html="title"></h1>
    <image-example-image :src="image" :srcset="srcset"/>
  </section>
</template>
<script>
import ImageExampleImage from './image-example-img.vue';

export default {
  name: 'image-example',
  components: {
    ImageExampleImage,
  },
  data() {
    return {
      title: '',
      image: null,
      srcset: [],
    };
  },
};
</script>
