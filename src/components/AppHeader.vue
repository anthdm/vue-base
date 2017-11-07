<template>
  <nav class="navbar fixed-top navbar-expand-lg">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Navbar/>
  </nav>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'header',
  components: {
    Navbar
  }
}
</script>