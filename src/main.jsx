import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './assets/styles/main.scss'


// import { Provider } from 'react-redux'
// import './assets/styles/main.scss'
// import * as serviceWorkerRegistration from './serviceWorkerRegistration'
// import { store } from './store';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <Provider store={store}>
    <App />
  // </Provider>
)
