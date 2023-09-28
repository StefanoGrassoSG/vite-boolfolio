<script >
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from 'axios';
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
    MainComponent
  },
  created() {
    axios.get('http://localhost:8000/api/projects')
    .then(response => {
      console.log(response.data.results)
      this.store.projects = response.data.results.data
    })
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
