/**
 *
 * Aboutme
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectAboutme } from './selectors';
import { aboutmeSaga } from './saga';
import { MainLayout } from 'app/components/MainLayout';

export function Aboutme({ history }) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: aboutmeSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const aboutme = useSelector(selectAboutme);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Aboutme</title>
        <meta name="description" content="Description of Aboutme" />
      </Helmet>
      <MainLayout history={history} />
    </>
  );
}

const Div = styled.div``;
