import React from 'react';
import ReactDOM from 'react-dom';


import Admin_order_list from './Admin_order_list';
import registerServiceWorker from './registerServiceWorker';
import main from './Main';

ReactDOM.render(<Admin_order_list />, document.getElementById('root'));
registerServiceWorker();
