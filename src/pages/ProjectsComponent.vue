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
            <div class="row d-flex align-items-stretch">
                <div class="col-3 mt-3" v-for="(project, i) in store.projects" :key="i">
                    <div class="card h-100 p-3">
                        <div class="mb-2">
                            NAME: {{ project.name }}
                        </div>
                        <div class="mb-2">
                            DESCRIPTION: {{ project.description }}
                        </div>
                        <div class="mb-2">
                            START DATE: {{ project.start_date }}
                        </div>
                        <div class="mb-2">
                            END DATE: {{ project.end_date }}
                        </div>
                        <div class="mb-2">
                            PROJECT STATUS: {{ project.project_status }}
                        </div>
                        <div class="mb-2">
                            PROJECT LINK: <a :href="project.project_link">{{ project.project_link }}</a>
                        </div>
                        <div class="mb-2">
                            TYPE: {{ project.type.name }}
                        </div>
                        <div class="mb-2">
                            TECHNOLOGIES: 
                            <div v-for="(technology, i) in project.technologies" :key="i">
                                 {{ technology.name }}
                            </div>
                        </div>
                    </div>
                </div>
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
