import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import middleware from './middleware';
import rootReducer from './reducers';

const persistConfig = {
  key: 'persist-root',
  whiteList: [
    'selectedPage',
    'currentUser',
  ],
  version: 17,
  storage,
};

const configureStore = () => {
  const store = createStore(persistReducer(persistConfig, rootReducer), middleware);
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default configureStore;
