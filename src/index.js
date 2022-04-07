import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { PrismicProvider } from '@prismicio/react';
import { client } from './prismic';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<PrismicProvider client={client}>
		<App />
	</PrismicProvider>
);
