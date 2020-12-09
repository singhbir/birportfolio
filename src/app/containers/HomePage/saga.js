import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { actions } from './slice';
import homepageapis from '../../components/_service/homepageapis';

export function* getQuotes() {
  yield delay(500);
  const url = 'https://type.fit/api/quotes';
  try {
    const quotes = yield call(homepageapis.getquotes, url);
    if (quotes?.length > 0) {
      yield put(actions.successQuotes(quotes));
    } else {
      yield put(actions.errorQuotes('No data ..'));
    }
  } catch (err) {
    yield put(actions.errorQuotes('Something went wrong'));
  }
}

export function* quotesSaga() {
  yield takeLatest(actions.loadQuotes.type, getQuotes);
}
