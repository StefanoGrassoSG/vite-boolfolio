<script >
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import axios from 'axios';
import { store } from './store.js'

export default {
  data() {
    return {
      mainMenu : false,
      store
    }
  },
  methods: {

  },
  components: {
    HeaderComponent,
    MainComponent,
    ProjectsComponent
  },
  created() {
    axios.get('http://localhost:8000/api/projects')
    .then(response => {
      console.log(response.data.results)
      this.store.projects = response.data.results
    })
  }
}
</script>

<template>

  <HeaderComponent />
  
  <MainComponent v-if="mainMenu == true" />

  <ProjectsComponent v-if="mainMenu == false" />

</template>

<style lang="scss" scoped>
@use "assets/scss/main";
</style>
