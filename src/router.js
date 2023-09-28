import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectsComponent from './pages/ProjectsComponent.vue';
import NotFound from './pages/NotFound.vue';
import ProjectComponent from './pages/ProjectComponent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsComponent
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: ProjectComponent
        },
        {
            path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
        }
    ]
});

export { router };