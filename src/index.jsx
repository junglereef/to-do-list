import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import ReactDOM from 'react-dom';

// if (typeof window !== 'undefined') {
//     ReactDOM.render(<MainWrapper />, document.getElementById("root"));
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
