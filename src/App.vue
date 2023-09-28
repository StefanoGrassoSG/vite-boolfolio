<script >
import HeaderComponent from './components/headercomponent.vue';
import MainComponent from './components/MainComponent.vue';
import { store } from './store.js'

export default {
  data() {
    return {
      store
    }
  },
  methods: {

  },
  components: {
    HeaderComponent,
    MainComponent,
  }
}
</script>

<template>

  <HeaderComponent />
  
  <MainComponent />

</template>

<style lang="scss" scoped>
@use "assets/scss/main";
</style>
