import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { contactActions } from './slice';
import homepageapis from '../../components/_service/homepageapis';
import { getDataFromFireDB } from 'utils/firehelper';

export function* apiCallContact() {
  try {
    // let data = yield call(homepageapis.getContactDetails);
    let contactmeData = yield getDataFromFireDB('contactme');
    if (contactmeData?.length > 0) {
      yield put(contactActions.successContactDetails(contactmeData));
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
