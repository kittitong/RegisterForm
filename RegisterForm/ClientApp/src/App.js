import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { RegisterData } from './components/RegisterData';
import { RegisterCompany } from './components/RegisterCompany';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/register-data' component={RegisterData} />
        <Route path='/register-company' component={RegisterCompany} />
      </Layout>
    );
  }
}
