import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { userRoutes } from "./routes/userRoutes";
import SpinnerComponents from "./components/Spinner/SpinnerComponents";

function App() {
  return (
    <div>
      <SpinnerComponents />
      <BrowserRouter>
        <Switch>
          {userRoutes.map((route, index) => {
            if (route.isUseLayout) {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  render={() => {
                    return route.component;
                  }}
                ></Route>
              );
            }
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              ></Route>
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
