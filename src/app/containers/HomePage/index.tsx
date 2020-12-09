import { MainLayout } from 'app/components/MainLayout';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { quotesSaga } from './saga';
import { selectQuotes, selectLoading, selectError } from './selectors';
import { CardLayout } from 'app/components/CardLayout';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Graph } from 'app/components/Graph/Loadable';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Particlesnow } from 'app/components/Particlesnow';

const Heading = styled.div`
  font-family: 'Major Mono Display', monospace;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Span = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  text-align: center;
  text-align: center;
  font-weight: 400;
`;

export function HomePage({ history }) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: quotesSaga });

  const quotes = useSelector(selectQuotes);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.loadQuotes());
  }, []);

  console.log(quotes);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <MainLayout history={history}>
        <Particlesnow />
      </MainLayout>
    </>
  );
}
