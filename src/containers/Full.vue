<template>
  <div class="app-header"> 
    <AppHeader/>
    <div class="app-body">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'full',
  components: {
    AppHeader
  }
}
</script>