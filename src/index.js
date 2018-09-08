import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import registerServiceWorker from './registerServiceWorker';

// const reduxStore = 
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
