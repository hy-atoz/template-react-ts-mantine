import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/App';
import 'src/styles/normalize.css';
import 'src/styles/tailwind.css';
import { ourMantineTheme } from 'src/config/ourMantineTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider theme={ourMantineTheme}>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
