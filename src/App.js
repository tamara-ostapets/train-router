import 'react-bulma-components/dist/react-bulma-components.min.css';
import {TodosPage} from './components/TodosPage';
import {MainNavigation} from './components/MainNavigation';
import {HomePage} from './components/HomePage';
import {Route, Switch, Redirect} from 'react-router-dom';
import {AboutPage} from './components/AboutPage';

function App() {

  return (
    <>
      <MainNavigation />

      <section className="section">
        <div className="container">
          <h1 className="title">
            Route Training
            <Route path="/todos"> - Todos</Route>
            <Route path="/about">
               - About
               <Route path="/about/team"> (Team)</Route>
            </Route>
          </h1>

          <div className="columns">
            <div className="column">
              <Switch>
                <Route path="/todos/:todoId" component={TodosPage} />
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />

                <Redirect path="/home" to="/" />

                <p>Not Found Page</p>
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
