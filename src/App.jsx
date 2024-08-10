import { Provider } from "react-redux";
import "./App.css";
import Router from "./Router/Router";
import { store } from "./store/Store";
store;

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
