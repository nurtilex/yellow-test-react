import { takeEvery, call, put, all } from 'redux-saga/effects';
import { userActions } from '../../slices/userSlice';
import { initAction } from '../index';
import { authUser, getJogsById } from '../../../api/auth';
function* fetchJogs() {
  try {
    const user = yield call(authUser);
    const jogs = yield call(getJogsById, user.id);
    yield all([
      put(userActions.setUser(user)),
      put(userActions.setJogs(jogs)),
      put(userActions.setLoggedIn(true)),
    ]);
  } catch (error) {
    console.log(error.message);
  }
}
function* watchInitAction() {
  yield takeEvery(initAction.toString(), fetchJogs);
}

export default watchInitAction;
