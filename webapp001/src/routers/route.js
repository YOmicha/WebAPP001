import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import principal from '../principal';
import login from '../login/login';


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home</div>,
        main: principal
    },
    {
        path: '/login',
        sidebar: ()=> <div>login</div>,
        main: () => <div>asdasd</div>
    },
    {
        path: '/shoelaces',
        sidebar: () => <div>shoelaces</div>,
        main: () => <h2>Shoelaces</h2>
    }
]


const SidebarExample = () => (
<Router>
    <Provider>
        <div>
        <div className="collapse navbar-collapse" >
        <nav className="navbar navbar-toggeable">
            <div className="collapse navbar-collapse menu_container">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item active"><Link className="nav-link" to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
        </div>
        <div className="container">
            {routes.map((route, index) =>(
            <Route
                key= {index}
                path= {route.path}
                exact= {route.exact}
                component = { route.main }
            />
            ))}
        </div>
        </div>
   </Provider>     
</Router>
    );

export default SidebarExample;