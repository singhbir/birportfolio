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
import { BlogCard } from 'app/components/BlogCard/Loadable';
import { Link } from 'react-router-dom';

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
      <Div className="mx-1">
        {/* <MainLayout history={props.history}> */}
        <div className="headerdiv">
          <Header title="Coming Soon" />
        </div>
        {/* <div className="row">
          <div className="col-md-6 col-sm-12">
            <Link to={`/blogs/1`} style={{ textDecoration: 'none' }}>
              <BlogCard />
            </Link>
          </div>
        </div> */}
        {/* </MainLayout> */}
      </Div>
    </>
  );
}

const Div = styled.div`
  .headerdiv {
    margin-top: 7%;
  }
`;
