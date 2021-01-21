import homepageapis from 'app/components/_service/homepageapis';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { portfolioActions } from './slice';

export function* callApi() {
  try {
    let data = yield call(homepageapis.getProjects);
    if (data?.length > 0) {
      yield put(portfolioActions.successprojectData(data));
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
