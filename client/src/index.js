import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ApolloClient, {InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import ProductDescriptionPage from './components/ProductDescriptionPage/ProductDescriptionPage';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import Cart from './components/Cart/Cart';
import App from './App';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path={'/'} component={ProductListingPage}/>
                    <Route exact path={'/cart'} component={Cart}/>
                    <Route path={'/:id'} component={ProductDescriptionPage}/>
                </Switch>
            </App>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);
