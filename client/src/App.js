import React from 'react'
import Navigation from './Navigation'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Child from './component/Child';
export default function App() {
	return (
		<div>
			<Navigation />
			
		</div>
	)
}
