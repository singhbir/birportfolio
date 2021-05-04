import homepageapis from 'app/components/_service/homepageapis';
import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { resumeActions } from './slice';
import db from 'utils/Fire';
import { getDataFromFireDB } from 'utils/firehelper';

const getSkillDataFromFireBase = () => {
  return db
    .collection('skills')
    .get()
    .then(snapshot => {
      const data = snapshot.docs.map(doc => doc.data());
      return Promise.resolve(data);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

export function* resumeWorker() {
  yield delay(500);
  try {
    //let data = yield call(homepageapis.getSkillData);
    //let resumedata = yield call(homepageapis.getResumeData);
    let data = yield getSkillDataFromFireBase();
    let resumeData = yield getDataFromFireDB('resumes');
    yield put(resumeActions.loadResumeData());
    if (data?.length > 0) {
      yield put(resumeActions.successSkillData(data));
    } else {
      yield put(resumeActions.failSkillData('No Data Found'));
    }

    if (resumeData?.length > 0) {
      yield put(resumeActions.successResumeData(resumeData));
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
