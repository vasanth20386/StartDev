import React from "react";
const Home = React.lazy(() => import("./Views/Home/Home")); 
const routes = [
	{
		path: "/home",
		component: Home,
		exact: true,
	},
	{
		path: "/",
		component: Home,
		exact: true,
	},
];
export default routes;
