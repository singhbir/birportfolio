/**
 *
 * Blogs
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectBlogs } from './selectors';
import { blogsSaga } from './saga';
import { MainLayout } from 'app/components/MainLayout/Loadable';
import { Header } from 'app/components/Header/Loadable';

interface Props {
  history: object;
}

export function Blogs(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: blogsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const blogs = useSelector(selectBlogs);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Blogs</title>
        <meta name="description" content="Description of Blogs" />
      </Helmet>
      <Div>
        {/* <MainLayout history={props.history}> */}
        <Header title="coming soon" />
        {/* </MainLayout> */}
      </Div>
    </>
  );
}

const Div = styled.div``;
