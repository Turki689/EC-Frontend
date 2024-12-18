import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Prodects from "../views/Prodects.vue";
import AboutUs from "@/views/AboutUs.vue";
import ComPanies from "@/views/ComPanies.vue";
import CompanyDetails from "@/views/CompanyDetails.vue";
import ListOfCompanies from "@/views/ListOfCompanies.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },

    {
        path: "/prodects",
        name: "prodects",
        component: Prodects,
    },
    {
        path: "/about",
        name: "about",
        component: AboutUs,
    },
    {
        path: "/ComPanies",
        name: "ComPanies",
        component: ComPanies,
    },

    {
        path: "/product/:id",
        name: "ListOfCompanies",
        component: ListOfCompanies,
    },
    {
        path: "/company/:id",
        name: "CompanyDetails",
        component: CompanyDetails,
    },
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

