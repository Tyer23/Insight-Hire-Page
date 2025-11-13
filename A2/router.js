//Define routes
const routes = [
    { path: '/', component: jobOverview },
    { path: '/jobs/:id', component: Job },
];

//Create the router instance and pass the `routes` option
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
  