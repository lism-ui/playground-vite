import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "~/routes/index";
import AboutPage from "~/routes/page/about";

import ErrorPage from "~/error-page";

// import "@lism-ui/core/scss/all.scss";
import "@lism-ui/core/css/all.css";
import "./global.scss";

// [React Router]: https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Index /> },
			{ path: "/about", element: <AboutPage /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
