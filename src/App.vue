<script >
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue'

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    HeaderComponent,
    MainComponent
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
