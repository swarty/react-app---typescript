import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => (
	<nav>
		<div className="nav-wrapper padding-normal">
			<a href="/" className="brand-logo">React + TypeScript</a>
			<ul className="right hide-on-med-and-down">
				<li><a href="/">Todo list</a></li>
				<li><a href="/">About us</a></li>
			</ul>
		</div>
	</nav>
)