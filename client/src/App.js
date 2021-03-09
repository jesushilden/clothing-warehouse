import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation'
import Products from './containers/Products'

const App = () => {

  const routes = ['gloves', 'facemasks', 'beanies']

  return (
    <div className='App'>
      <Router>
        <Navigation routes={routes} />
        <Switch>
          {routes.map(route => <Route exact path={`/${route}`} render={() => <Products category={route} />} key={route} />)}
          <Redirect to={`/${routes[0]}`} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
