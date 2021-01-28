/**
 *
 * Resume
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { reducer, sliceKey, resumeActions } from './slice';
import {
  selectLoading,
  selectSkillData,
  selecterror,
  selectResumeData,
  selectResumeLoading,
} from './selectors';
import { resumeSaga } from './saga';
import { MainLayout } from 'app/components/MainLayout/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import colors from '../../../styles/colors';
import { Loaderbars } from 'app/components/Loaderbars/Loadable';
import { Expbar } from 'app/components/Expbar/Loadable';
import { RiSuitcaseLine } from 'react-icons/ri';
import { BiBook } from 'react-icons/bi';

interface Props {
  history: object;
}

export function Resume(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: resumeSaga });
  const skillData = useSelector(selectSkillData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selecterror);
  let resumeData = useSelector(selectResumeData);
  const loadingResumeData = useSelector(selectResumeLoading);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const resume = useSelector(selectResume);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  React.useEffect(() => {
    loadingData();
  }, []);

  const loadingData = () => {
    dispatch(resumeActions.loadSkillData());
  };

  const SkillPresenter = ({ title, per }) => {
    return (
      <Col lg="6" md="6" sm="12">
        <h6 className="skillname">{title.toUpperCase()}</h6>
        <div className="skillarea">
          <div className="percentage">{per}% &nbsp;&nbsp;&nbsp;</div>
          <ProgressBar
            now={per}
            style={{ width: '100%', height: '0.5rem', marginTop: '2%' }}
          />
        </div>
      </Col>
    );
  };

  return (
    <>
      <Helmet>
        <title>Resume</title>
        <meta name="description" content="Description of Resume" />
      </Helmet>
      <MainLayout history={props.history}>
        <Div>
          <Header title="my skills" />
          <Row>
            {!loading ? (
              error === null ? (
                skillData.map((item, i) => {
                  return (
                    <SkillPresenter
                      title={item.title}
                      per={item.percentage}
                      key={i}
                    />
                  );
                })
              ) : (
                <h1 className="text-white">Something went wrong...</h1>
              )
            ) : (
              <Loaderbars />
            )}
          </Row>
          <div className="headermargin">
            <Header title="Resume" />
          </div>
          {!loadingResumeData ? (
            <>
              <div>
                <h4 className="subhead">
                  <RiSuitcaseLine className="icon" />
                  &nbsp; Working Experience
                </h4>
                <div>
                  {resumeData.length <= 0 && !loadingResumeData ? (
                    <h1 className="text-white">Updating ...</h1>
                  ) : (
                    <Expbar data={resumeData} vidata={'work'} />
                  )}
                </div>
              </div>
              <div>
                <h4 className="subhead">
                  <BiBook className="icon" />
                  &nbsp; Educational Qualifications
                </h4>
                <div>
                  {resumeData.length <= 0 && !loadingResumeData ? (
                    <h1 className="text-white">Updating ...</h1>
                  ) : (
                    <Expbar data={resumeData} vidata={'edu'} />
                  )}
                </div>
              </div>
            </>
          ) : (
            <Loaderbars />
          )}
        </Div>
      </MainLayout>
    </>
  );
}

const Div = styled.div`
  margin-left: 2%;
  margin-top: 5%;
  margin-right: 2%;
  margin-bottom: 10%;
  .skillarea {
    height: 40%;
    display: flex;
  }
  .headermargin {
    margin-top: 3em;
  }
  .subhead {
    color: white;
    margin-left: 7px;
    /* font-family: 'Ubuntu', sans-serif; */
    font-family: 'Concert One', cursive;
    margin-bottom: 50px;
    letter-spacing: 1px;
    font-size: 2em;
  }
  .icon {
    color: ${colors.fontcolorgrey};
  }
  .skillname {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.25rem;
  }
  .percentage {
    color: ${colors.navfontcolor};
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
  }
`;
