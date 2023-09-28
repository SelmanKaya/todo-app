import {createRouter , createWebHashHistory} from "vue-router"

const routes = [
    {
        name  : "homePage",
        path : "/",
        component : () =>  import("../views/homePage.vue")
    },
    {
        name : "mainPage",
        path : "/main",
        component : () => import("../views/Main.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router