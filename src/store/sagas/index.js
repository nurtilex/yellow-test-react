import { all } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import watchInitAction from './initSaga/initSaga';
import watchPostAction from './postJogSaga/postJogSaga';

export const initAction = createAction('INIT_ACTION');
export const triggerPostAction = createAction('TRIGGER_POST');

export default function* rootSaga() {
  yield all([watchInitAction(), watchPostAction()]);
}
