import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import 'src/styles/tailwind.css';
import 'src/styles/normalize.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
