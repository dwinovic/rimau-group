import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage } from '../../pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default Routes;
