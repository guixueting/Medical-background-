
import * as React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { OnlineLoading } from '../components';
import Layout from './layout';
import Login from './Login';

let App = () => {

  return <BrowserRouter basename="">
    <React.Suspense fallback={<OnlineLoading />}>
      <Switch>
        <Route path={'/'} component={Login} exact></Route>
        <Route path={'/index'} component={Layout}></Route>
      </Switch>
    </React.Suspense>
  </BrowserRouter>;
};

export default App;
