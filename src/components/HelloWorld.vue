<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Examples</h3>
    <dl>
      <dt>Embedded image</dt>
      <dd>This page. An example of images referenced from inside a Vue template.</dd>

      <dt>Background image</dt>
      <dd>An example of a background image referenced from SCSS</dd>
      <dd><router-link to="/example-background">/example-background</router-link></dd>

      <dt>Even image</dt>
      <dd>An example of an image whose scaled width is an integer.</dd>
      <dd><router-link to="/example-even">/example-even</router-link></dd>

      <dt>Odd image</dt>
      <dd>
        An example of an image whose scaled width is not an integer.
      </dd>
      <dd><router-link to="/example-odd">/example-odd</router-link></dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
dt {
  font-weight: 700;
  margin-bottom: .5rem;
  dd + & {
    margin-top: 2rem;
  }
}
dd {
  margin: 0 0 0.5rem 0;
}
</style>
