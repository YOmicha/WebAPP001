import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SidebarExample  from './routers/route';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const sidebar = SidebarExample(); 
const root =  document.getElementById('root');

ReactDOM.render(
<div>
{sidebar}
</div>
, 
root);
registerServiceWorker();





