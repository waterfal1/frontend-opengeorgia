import { combineReducers } from 'redux';

import selectedPage from './Pages/Home/Components/content/reducers/selectedPage';
import selectedExcursion from './Pages/tours/reducers/selectedExcursion';
import pages from './Pages/tours/reducers/setPages';

import authReducer from './reducers/auth';
import formReducer from './reducers/bookingForm';
import setUserReducer from './Pages/admin/reducers/user';
import selectedTransfer from './Pages/transfer/reducers/selectedTransfer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  selectedPage,
  pages,
  selectedExcursion,
  currentUser: setUserReducer,
  selectedTransfer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
