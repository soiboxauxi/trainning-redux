import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import Header from './components/Header';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header />
                    <ul>
                        <li><Link to="/photos">Photo</Link></li>
                        <li><Link to="/photos/123">123</Link></li>
                    </ul>
                    <Switch>
                        <Redirect exact from="/" to="/photos"></Redirect>

                        <Route path="/photos" component={Photo}></Route>
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;