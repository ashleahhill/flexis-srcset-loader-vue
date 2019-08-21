
<script>
import image, { srcset } from '../assets/examples/601.png';
import ImageExample from '../components/image-example.vue';

export default {
  extends: ImageExample,
  name: 'the-odd-image',
  data() {
    return {
      title: 'An image that was originally 601 pixels wide should be below.',
      image,
      srcset,
    };
  },
};
</script>
