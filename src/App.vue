<template>
  <v-app>
    <navigation></navigation>
    <router-view></router-view>
    <appFooter></appFooter>
  </v-app>
</template>

<script>
import navigation from '@/components/navigation/navigation'
import appFooter from '@/components/footer/footer'
export default {
  name: 'app',
  components: {navigation, appFooter}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
