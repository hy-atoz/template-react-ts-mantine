import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { ROUTES } from 'src/constants/routes';
import { Layout } from 'src/layouts/Layout';
import { Example } from 'src/pages/Example';
import { Home } from 'src/pages/Home';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path={ROUTES.home} element={<Home />} />
			<Route path={ROUTES.example} element={<Example />} />
		</Route>
	),
	{
		future: { v7_normalizeFormMethod: true },
	}
);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export { App };
