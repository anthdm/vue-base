<template>
  <div class="jumbotron">
    <h1 class="display-3">{{ msg }}</h1>
    <p class="lead">A simple base solution for Vue.js apps with boostrap 4.0 and all its goodies.</p>
    <hr class="my-4">
    <a class="btn btn-primary btn-lg" href="https://github.com/anthdm/vue-base" role="button"><i class="fa fa-github"></i> Learn more</a>
  </div>
</template>

<script>
export default {
  name: 'helloWorld',
  data () {
    return {
      msg: 'Hello, world!'
    }
  }
}
</script>