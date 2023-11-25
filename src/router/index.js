import {createRouter , createWebHashHistory} from "vue-router"

const routes = [
    {
        name  : "homePage",
        path : "/",
        props: true,
        component : () =>  import("../views/homePage.vue")
    },
    {
        name : "mainPage",
        path : "/main",
        props: true,
        component : () => import("../views/Main.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router