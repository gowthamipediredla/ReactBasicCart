import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL='http://jsonplaceholder.typicode.com'
axios.interceptors.request.use(request=>{console.log(request);

    //can edit request before returning
return request},error=>{
    console.log(error);
    return Promise.reject(error)
});



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
