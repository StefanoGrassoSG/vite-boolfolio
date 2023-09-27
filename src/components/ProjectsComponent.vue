<script >
import { store } from '../store.js'

export default {
  data() {
    return {
        store
    }
  },
  methods: {

  }
}
</script>

<template>

  <main>
        <div class="container">
            <div class="row">
                <div class="col mt-3" v-for="(project, i) in store.projects" :key="i">
                    <div class="card">
                        <h3>
                            {{ project.name }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
  </main>

</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - 168px);
    background-image: url('https://rare-gallery.com/uploads/posts/1247933-white-geometric.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
