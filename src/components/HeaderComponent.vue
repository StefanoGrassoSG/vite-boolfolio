<script >
import { store } from '../store.js'

export default {
  data() {
    return {
        store
    }
  },
  methods: {
    home() {
        store.mainMenu = true;
    }
  }
}
</script>

<template>
    
  <header class="bg-light p-5">
        <div class="px-4 bg-white container-fluid shadow py-3 d-flex justify-content-between align-items-center">
            <div class="info d-flex align-items-center">
                <router-link :to="{ name: 'home' }" class="me fw-bold">
                    STEFANO GRASSO
                </router-link>
            </div>
            <div class="nav m-0">
                <ul class="m-0 fw-bold">
                    <li class="d-inline-block ms-3 me-3">
                       <a href="">
                         About
                       </a>
                    </li>
                    <li class="d-inline-block ms-3 me-3">
                        <router-link :to="{ name: 'projects' }">
                            Projects
                        </router-link>
                    </li>
                    <li class="d-inline-block ms-3 me-3">
                        <a href="">
                            Clients
                        </a>
                    </li>
                    <li class="d-inline-block ms-3 me-3">
                        <a href="">
                            Contact
                        </a>
                    </li>
                    <li class="d-inline-block ms-3 me-3">
                        <a href="">
                            Blog
                        </a>
                    </li>
                </ul>
            </div>
        </div>
  </header>

</template>

<style lang="scss" scoped>
.me {
    cursor: pointer;
}

header {
    background: rgb(237,235,233);
    background: linear-gradient(262deg, rgba(237,235,233,1) 0%, rgba(25,24,23,1) 100%);
}

li {
    padding: 15px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 50%;
}

li a{
    text-decoration: none;
    color: black;
    text-transform: uppercase;
}

li:hover {
    background-color: lightgray;
    border-radius: 50%;
    transform: scale(1.1);
}
</style>
