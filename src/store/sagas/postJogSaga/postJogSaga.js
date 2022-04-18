import { takeEvery, call, put, all } from 'redux-saga/effects';
import { userActions } from '../../slices/userSlice';
import { filteringActions } from '../../slices/filteringSlice';
import { triggerPostAction } from '../index';
import { postJog } from '../../../api/jogs';
import { getJogsById } from '../../../api/auth';
function* fetchPost({ payload }) {
  try {
    const response = yield call(postJog, payload);
    if (response.status === 201) {
      const jogs = yield call(getJogsById, response.data.response.user_id);
      yield all([
        put(userActions.setJogs(jogs)),
        put(filteringActions.setFrom('')),
        put(filteringActions.setTo('')),
      ]);
    }
  } catch (error) {
    console.log(error.message);
  }
}
function* watchPostAction() {
  yield takeEvery(triggerPostAction.toString(), fetchPost);
}

export default watchPostAction;
