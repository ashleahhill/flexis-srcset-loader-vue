
<script>
import image, { srcset } from '../assets/examples/600.png';
import ImageExample from '../components/image-example.vue';

export default {
  extends: ImageExample,
  name: 'the-even-image',
  data() {
    return {
      title: 'An image that was originally 600 pixels wide should be below.',
      image,
      srcset,
    };
  },
};
</script>
