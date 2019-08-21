<template>
  <img class="image-example-img" :src="src" :srcset="srcsetString" />
</template>
<script>
export default {
  name: 'image-example-img',
  props: {
    src: {
      required: true,
    },
    srcset: {
      type: Array,
      required: true,
    },
  },
  computed: {
    srcsetString() {
      return this.srcset
        .map((source) => {
          const out = `${source.src} ${source.name.substr(-2)}`;

          return out;
        })
        .join(', ');
    },
  },
};
</script>
