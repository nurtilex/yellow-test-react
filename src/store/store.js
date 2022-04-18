import { configureStore } from '@reduxjs/toolkit';
import user from './slices/userSlice.js';
import filtering from './slices/filteringSlice.js';
import rootSaga from './sagas/index.js';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { user, filtering },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
