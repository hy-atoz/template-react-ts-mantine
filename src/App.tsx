import { RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
import Layout from 'src/layouts/Layout';
import Home from 'src/pages/Home';

const router = createBrowserRouter(
	[
		{
			element: (
				<>
					<ScrollRestoration getKey={(location) => location.path} />
					<Layout />
				</>
			),
			children: [
				{
					path: '/',
					element: <Home />,
				},
			],
		},
	],
	{
		future: { v7_normalizeFormMethod: true },
	},
);

const App = () => {
	return <RouterProvider router={router} />;
};

export { App };
