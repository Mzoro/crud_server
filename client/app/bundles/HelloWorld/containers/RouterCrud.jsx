import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import EditProd from '../components/EditProd';
import CreateProd from '../components/CreateProd';
import IndexProd from '../components/IndexProd';

export default class RouterCrud extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/crud/prods" component={IndexProd}/>
        <Route path="/crud/prods/new" component={CreateProd}/>
        <Route path="/crud/prods/:id/edit" component={EditProd}/>
      </Router>
    )
  }
}



