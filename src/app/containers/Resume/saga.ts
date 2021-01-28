import homepageapis from 'app/components/_service/homepageapis';
import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { resumeActions } from './slice';

export function* resumeWorker() {
  yield delay(500);
  try {
    let data = yield call(homepageapis.getSkillData);
    let resumedata = yield call(homepageapis.getResumeData);
    yield put(resumeActions.loadResumeData());
    if (data?.length > 0) {
      yield put(resumeActions.successSkillData(data));
    } else {
      yield put(resumeActions.failSkillData('No Data Found'));
    }

    if (resumedata?.length > 0) {
      yield put(resumeActions.successResumeData(resumedata));
    } else {
      yield put(resumeActions.failResumeData('No Data Found'));
    }
  } catch (err) {
    yield put(resumeActions.failSkillData('Something went wrong'));
    yield put(resumeActions.failResumeData('Server is Down :( '));
  }
}

export function* resumeSaga() {
  yield takeLatest(resumeActions.loadSkillData.type, resumeWorker);
}
