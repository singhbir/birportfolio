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
import colors from 'styles/colors';
import { SocialArea } from 'app/components/SocialArea/Loadable';

const Heading = styled.span`
  font-family: 'Concert One', cursive;
  letter-spacing: 0.2rem;
  font-size: 2.8rem;
  line-height: 3.1rem;
  font-weight: 700;
  color: white;
  .name {
    color: ${colors.fontblue};
  }
`;

const Typostyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Subheading = styled.div`
  font-size: 1.2rem;
  line-height: 1.75rem;
  color: ${colors.fontcolorgrey};
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  margin-top: 20px;
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
      {/* <MainLayout history={history}> */}
      <Typostyles>
        <Heading>
          Hi, I am <span className="name">Bir Singh</span>
        </Heading>
        <br />
        <Subheading>
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </Subheading>
        <SocialArea />
      </Typostyles>
      <div style={{ height: '100vh' }}>
        <Particlesnow />
      </div>
      {/* </MainLayout> */}
    </>
  );
}
