<script >
import { store } from '../store.js'

export default {
  data() {
    return {
        store
    }
  },
  methods: {
    projects() {
        store.mainMenu = false;
    }
  }
}
</script>

<template>

  <main class="bg-light position-relative">
        <div class="position-absolute top-50 start-50 translate-middle">
            <h1 class="text-center fw-bold fs-1">
                HEY, I'M STEFANO GRASSO
            </h1>
            <p class="mt-4 text-center fs-4">
                A full-stack web developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product.
            </p>
            <div class="text-center mt-4">
                <button @click="projects()" class="btn btn-warning fw-bold px-5 py-3">
                    See my projects
                </button>
            </div>
        </div>
  </main>

</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - 182px);
    background-image: url('https://rare-gallery.com/uploads/posts/1247933-white-geometric.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
