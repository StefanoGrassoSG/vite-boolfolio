<script >
import axios from 'axios';
import { store } from '../store.js'

export default {
  data() {
    return {
        store
    }
  },
  created() {
    this.getProject();
  },
  mounted() {
    this.store.project = null;
  },    
  methods: {
    getProject() {
        axios.get(`http://localhost:8000/api/projects/${this.$route.params.slug}`)
        .then(response => {
        console.log(response.data.results)
        this.store.project = response.data.results;
    })
    }
}}
</script>

<template>

    <main>
        <div>
            <h1>
                {{ store.project.name }}
            </h1>
        </div>
    </main>

</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - 184px);
    background-image: url('https://rare-gallery.com/uploads/posts/1247933-white-geometric.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
