import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { contactActions } from './slice';
import homepageapis from '../../components/_service/homepageapis';

export function* apiCallContact() {
  try {
    let data = yield call(homepageapis.getContactDetails);
    if (data?.length > 0) {
      yield put(contactActions.successContactDetails(data));
    } else {
      yield put(contactActions.failContactDetails('No Data Found'));
    }
  } catch (err) {
    yield put(contactActions.failContactDetails('Something went Wrong'));
  }
}

export function* contactSaga() {
  yield takeLatest(contactActions.loadContactDetails.type, apiCallContact);
}
