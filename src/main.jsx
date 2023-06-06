import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import 'src/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
