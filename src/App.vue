<template>
  <div class="main-panel wrapper">
      <navbar></navbar>
      <div class="content">
        <router-view/>
      </div>
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  components: {
    navbar
  },
  
}
</script>

