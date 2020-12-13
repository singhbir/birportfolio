import homepageapis from 'app/components/_service/homepageapis';
import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { resumeActions } from './slice';

export function* resumeWorker() {
  yield delay(500);
  try {
    let data = yield call(homepageapis.getSkillData);
    if (data?.length > 0) {
      yield put(resumeActions.successSkillData(data));
    } else {
      yield put(resumeActions.failSkillData('No Data Found'));
    }
  } catch (err) {
    yield put(resumeActions.failSkillData('Something went wrong'));
  }
}

export function* resumeSaga() {
  yield takeLatest(resumeActions.loadSkillData.type, resumeWorker);
}
