<script >
import axios from 'axios';
import { store } from '../store.js'

export default {
  data() {
    return {
        store,
        notFound: false
    }
  },
  created() {
    this.store.project = null;
    this.getProject();
  },
  methods: {
    getProject() {
        axios.get(`http://localhost:8000/api/projects/${this.$route.params.slug}`)
        .then(response => {
        console.log(response.data.results)
        console.log(response)
        this.store.project = response.data.results;
        if(response.data.success == false) {
            this.notFound = true;
        }
    }).catch( error => {
        console.log(error)
        if(error.response.status == 404) {
            this.notFound = true;
        }
    })
}
}}
</script>

<template>

    <main>
        <div>
            <h1 v-if="store.project">
                {{ store.project.name }}
            </h1>
            <div>
                <img v-if="store.project.cover_img" :src="store.project.cover_img" :alt="store.project.name">
            </div>
            <h1 v-if="notFound == true">
                Error 404: Not Found
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
