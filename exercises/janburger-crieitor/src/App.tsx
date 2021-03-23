import React from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


// TODO: add atomic styles
const App = () => (
	<div>
		<Layout>
			<BurgerBuilder />
		</Layout>
	</div>
);

export default App;
