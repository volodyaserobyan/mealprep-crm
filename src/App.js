import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux'
import { getCategoriesHelpCenter } from './action/Action';
import { HELPCENTERCATGURL } from './const/ConstUrl'
import './App.scss';

let _ = require('lodash')

const App = props => {

  useEffect(() => {
    if (_.isEmpty(props.help)) {
      props.getCategoriesHelp(HELPCENTERCATGURL)
    }
  }, [])

  if (_.isEmpty(props.help)) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={SignIn} exact />
          <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    help: state.helpReducer.getCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategoriesHelp: url => dispatch(getCategoriesHelpCenter(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
