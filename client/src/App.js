import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Products from './containers/Products'

const App = () => {

  const routes = ['gloves', 'facemasks', 'beanies']

  return (
    <div className='App'>
      <Router>
        <Navigation routes={routes} />
        <Switch>
          {routes.map(route => <Route exact path={`/${route}`} render={() => <Products category={route} />} />)}
        </Switch>
      </Router>
    </div>
  )
}

export default App
