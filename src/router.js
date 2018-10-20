import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Skills from './components/Skills'
import Todos from './components/Todos.vue'
import Expenses from './components/Expenses.vue'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/skills',
            name: 'skills',
            component: Skills
        },
        {
            path: '/about/',
            name: 'about',
            component: About
        },
        // {
        //     path: '/about/:name',
        //     name: 'about',
        //     component: About
        // },
        {
            path: '/expenses/',
            name: 'expense',
            component: Expenses
        },
        {
            path: '/todos',
            name: 'todos',
            component: Todos
        }
    ]
})