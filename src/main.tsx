import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/App';
import { ourMantineTheme } from 'src/config/ourMantineTheme';
import 'src/styles/global.css';
import 'src/styles/normalize.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: true,
		},
	},
});

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<MantineProvider theme={ourMantineTheme}>
					<App />
				</MantineProvider>
			</QueryClientProvider>
		</React.StrictMode>
	);
} else {
	console.error('Could not find root element');
}
