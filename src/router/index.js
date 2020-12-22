import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Villages from "@/views/Villages.vue";
import VillageForm from "@/views/VillageForm.vue";
import Shows from "@/views/Shows.vue";
import ShowForm from "@/views/ShowForm.vue";
import Show from "@/views/Show.vue";
import Films from "@/views/Films.vue";
import NotFound from "@/views/404.vue";

const routes = [
	{
		path: "/",
		name: "Accueil",
		component: Home,
	},
	{
		path: "/villages",
		name: "Villages",
		component: Villages,
	},
	{
		path: "/villages/add",
		name: "VillageForm",
		component: VillageForm,
	},
	{
		path: "/evenements",
		name: "Evenements",
		component: Shows,
	},
	{
		path: "/evenements/add",
		name: "EvenementForm",
		component: ShowForm,
	},
	{
		path: "/evenements/:id",
		name: "Evenement",
		component: Show,
		props: true,
	},
	{
		path: "/films",
		name: "Films",
		component: Films,
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
