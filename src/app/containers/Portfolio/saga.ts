import homepageapis from 'app/components/_service/homepageapis';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { getDataFromFireDB } from 'utils/firehelper';
import { portfolioActions } from './slice';

export function* callApi() {
  try {
    //let data = yield call(homepageapis.getProjects);
    let projectsData = yield getDataFromFireDB('projects');
    projectsData.sort((a, b) => a.index - b.index);
    if (projectsData?.length > 0) {
      yield put(portfolioActions.successprojectData(projectsData));
    } else {
      yield put(portfolioActions.errorprojectData('No Data Found'));
    }
  } catch (err) {
    yield put(portfolioActions.errorprojectData('Something went wrong'));
  }
}

export function* portfolioSaga() {
  yield takeLatest(portfolioActions.loadprojectData.type, callApi);
}
