import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/category/:name",
        name: "category",
        component: () => import("../views/CategoryView.vue"),
        props: true
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import("../views/CartView.vue"),
    },
    {
        path: "/checkout",
        name: "checkout",
        component: () => import("../views/CheckoutView.vue"),
    },
    {
        path: "/confirmation/:orderId",
        name: "confirmation",
        component: () => import("../views/ConfirmationView.vue"),
        props:true
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: () => import("../views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
