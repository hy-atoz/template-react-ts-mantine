import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from 'src/App';
import 'src/styles/index.css';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{
					// path: "team",
					// element: <Team />,
					// loader: teamLoader,
				},
			],
		},
	],
	{
		future: { v7_normalizeFormMethod: true },
	},
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
