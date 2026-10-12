import React from 'react';
import ReactDOM from 'react-dom/client';    // ReactDOM is implementation of reach on web
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));    // creating a virtual DOM (a tree structure) for react and compares and overlaps it with out actual webpage DOM.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// <App /> is related to App.js file. So it calls the function App() which is inside App.js which returns an html. and then it is rendered in here in index.js
// So we are technically writing HTML using JS.
// package.json has "react-scripts": "5.0.1" which is reponsilbe for automatically injecting the index.js to out index.html file. 
// In vite, the js file is injected by a src element in index.html file explicitly by default since it does not possess these react-scripts.
