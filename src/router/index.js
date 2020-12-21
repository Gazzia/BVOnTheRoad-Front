import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/404.vue";

const routes = [
	{
		path: "/",
		name: "Accueil",
		component: Home,
	},
	{
		path: "/:catchAll(.*)",
		name: "404",
		component: NotFound,
	},
];
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
