/**
 *
 * Portfolio
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { reducer, sliceKey, portfolioActions } from './slice';
import {
  selectPortfolioLoading,
  selectPortfolioData,
  selectPortfolioError,
} from './selectors';
import { portfolioSaga } from './saga';
import { Header } from 'app/components/Header/Loadable';
import { MainLayout } from 'app/components/MainLayout/Loadable';
import { Projectcard } from 'app/components/Projectcard/Loadable';
import { Loaderbars } from 'app/components/Loaderbars/Loadable';
import { motion } from 'framer-motion';
import { pageTransition } from '../../../styles/animation';

interface Props {
  history: object;
}

export function Portfolio(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: portfolioSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const portfolio = useSelector(selectPortfolioData);
  const loading = useSelector(selectPortfolioLoading);

  console.log(portfolio);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  React.useEffect(() => {
    loadingData();
  }, []);

  const loadingData = () => {
    dispatch(portfolioActions.loadprojectData());
  };

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Description of Portfolio" />
      </Helmet>
      {/* <MainLayout history={props.history}> */}
      <Div variants={pageTransition} initial="out" animate="in" exit="out">
        <Header title="Portfolios" />
        {loading ? (
          <Loaderbars />
        ) : (
          <Margin>
            <div className="row ">
              {portfolio.map(item => {
                let newclass = `col-md-4 col-sm-6 mb-3 mt-3`;
                console.log('ITEM', item);
                return (
                  <div className={newclass}>
                    <Projectcard
                      heading={item.heading}
                      subheading={item.subheading}
                      websiteurl={item.website}
                      githuburl={item.github}
                      image={item.profilepicurl}
                    />
                  </div>
                );
              })}
            </div>
          </Margin>
        )}
      </Div>
      {/* </MainLayout> */}
    </>
  );
}

const Div = styled(motion.div)`
  margin-top: 50px;
  margin-left: 10px;
`;

const Margin = styled.div`
  .mrgin {
  }
`;
