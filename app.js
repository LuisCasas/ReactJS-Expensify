import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is a dashboard component.
    </div>
);

const AddExpensePage = () => (
    <div>
        Add a New expenses page.
    </div>
);

const EditExpensePage = () => (
    <div>
        Add a edit page.
    </div>
);

const HelpPage = () => (
    <div>
        Add a Help page.
    </div>
);

const NotFound = () => (
    <div>
        404 not found - <Link to="/">Back home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound}  />
            </Switch>
        </div>
    </BrowserRouter>
); 

ReactDOM.render(routes, document.getElementById('app'));