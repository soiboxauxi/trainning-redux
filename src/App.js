import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Header from './components/Header';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header />

                    <Switch>
                        <Redirect exact from="/" to="/"></Redirect>

                        <Route path="/photos" component={Photo}></Route>
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;