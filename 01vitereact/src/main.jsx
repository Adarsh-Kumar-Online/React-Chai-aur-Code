/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */ // these are just commentss to disable my error  lens from showing erros
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

const Element = {
	// custom reactElement Object we created in customReact,js inside customReact folder
	type: "a",
	props: {
		href: "https.google.com",
		target: "_blank",
	},
	children: "Click me to visit Google",
}; // It has its own custom properties thst we provided it with
// Calling this inside our render function won't run it since the render function was written to expect only certain type of objects

const anotherReactElement = // Using this inside render function works! since it is written in JSX syntax and react converts it into the form (React Element) required to render it
	(
		<a href="https://www.google.com" target="_blank">
			Visit Google
		</a>
	);
  

// Using vraibles:
const variable = "A variable"

// Creating an actual React element using React's syntax:
const reactElement = React.createElement(
	"a", // name/tag of element
	{ href: "https://google.com", target: "_blank" }, // its atrributes, leave the braces empty if no attributes exists
	"Click me to visit google", // its children/content
	// No keys are used direct values


	variable, // the vraibles are called at the end like this by default in whatever element they were called using the expression {} after the tree is formed
  // If the expression container an evaluation inside like {if(true) value}, it would be directly imported here and it can't be evaluated in here. So that's why we only pass final evaluated varibale values
  // Since we used our variable inside this a object it appears as a link too
);


function MyApp() {
	return (
		<div>
			<h1>Custom App function inside main.jsx !!</h1>
		</div>
	);
}
// calling this function inside render function using <MyApp /> by replacing <App /> works

createRoot(document.getElementById("root")).render(

  <App />     // default App function called using JSX syntax

	// reactElement, // using our custom React Element created using React syntax

	// The render function renders the objects that we provide it with like MyApp

	// anotherReactElement      // just using only this will make it appear in the webpage

	// (MyApp(),
	/* Since it was a function calling it like this still works since react is JS only. So we can even call it using MyApp() but only after removing StrictMode tags and the previous App function call. Just to understand not to be implemented*/

	// Even this works directly since its written in JSX so React converts it:
	// <a href="https://www.google.com" target="_blank">
	// 	Click me to visit Google
	// </a>,
);

// StrictMode just provides additional tools for development, testing and debugging and helps in safe building of project. We removed it since we practically went wild in this file. Otherwise it would not have worked with strict Mode.
