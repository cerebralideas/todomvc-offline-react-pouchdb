import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';
import db from './state/store';

import 'todomvc-app-css/index.css';
import './views/app.css';

//@ts-ignore
if (WEBPACK_ENV !== 'production') {
	let axe = require('react-axe');
	axe(React, ReactDOM);
}

document.addEventListener("DOMContentLoaded", (): void => {

	db.allDocs({
			include_docs: true,
			descending: true
		})
		.then((response) => {
			const data = {
				todos: response.rows ?
					response.rows.map((row) => row.doc):
					[],
				filter: "show_all"
			};

			ReactDOM.render(
				<App initialData={ data } />,
				document.getElementById('root')
			);
		})
});
