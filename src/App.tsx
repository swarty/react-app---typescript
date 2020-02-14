import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import { TodosPage } from './pages/todosPage';
import { AboutPage } from './pages/aboutPage';


import { Navbar } from './components/navbar';

const App: React.FC = () => {
	

	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Switch>
					<Route component={TodosPage} path="/" exact />
					<Route component={AboutPage} path="/about" />
					</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App;
