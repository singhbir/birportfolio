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
import { Header } from 'app/components/Header/Loadable';
import { Row, Col, Image } from 'react-bootstrap';
import mainimage from '../../../assets/images/bir.png';
import colors from 'styles/colors';
import aboutmedata from '../../components/_service/data/aboutmedata';
import { ServiceCard } from 'app/components/ServiceCard/Loadable';
import servicedata from '../../components/_service/data/servicedata';
import { motion } from 'framer-motion';
import { pageTransition } from '../../../styles/animation';

const Heading = styled.span`
  font-family: 'Concert One', cursive;
  letter-spacing: 0.2rem;
  font-size: 2rem;
  line-height: 3.1rem;
  font-weight: 700;
  color: white;
  .name {
    color: ${colors.fontblue};
  }
`;

const Subheading = styled.div`
  font-size: 1.2rem;
  line-height: 1.75rem;
  color: ${colors.fontcolorgrey};
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  margin-top: 20px;
`;

export function Aboutme({ history }) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: aboutmeSaga });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const aboutme = useSelector(selectAboutme);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const RESUME_URL =
    'https://internshala.com/student/resume_download/F4E2BD37-7527-E177-9E52-6AD148E20986/8591494';
  const Aboutmesection = () => {
    return (
      <>
        <Header title="About me" />
        <Row>
          <Col lg="6" md="6" sm="12">
            <Image src={mainimage} fluid thumbnail style={{ height: '80%' }} />
          </Col>
          <Col lg="6" md="6" sm="12">
            <Heading>
              Hi, I am <span className="name">Birvarinder Singh</span>
            </Heading>
            <br />
            <Subheading>
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </Subheading>
            <div className="mt-4">
              {aboutmedata.map((item, index) => {
                return (
                  <Typodiv key={item.heading + index}>
                    <Row>
                      <Col lg="4" md="4" sm="4" xs="4">
                        <h3 className="common">{item.heading}</h3>
                      </Col>
                      <Col lg="8" md="8" sm="8" xs="8">
                        <h3 className="common">:&nbsp;{item.subheading}</h3>
                      </Col>
                    </Row>
                  </Typodiv>
                );
              })}
            </div>
            <Button>
              <a href="https://internshala.com/student/resume_download/F4E2BD37-7527-E177-9E52-6AD148E20986/8591494">
                Download CV
              </a>
            </Button>
          </Col>
        </Row>
      </>
    );
  };

  const ServiceSection = () => {
    return (
      <>
        <Header title="Services" />
        <Row>
          {servicedata.map((service, index) => {
            return (
              <Col
                lg="6"
                md="6"
                sm="12"
                xs="12"
                className="mb-3"
                key={service.title + index}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>Aboutme</title>
        <meta name="description" content="Description of Aboutme" />
      </Helmet>
      {/* <MainLayout history={history}> */}
      <Div variants={pageTransition} initial="out" animate="in" exit="out">
        <Aboutmesection />
        <ServiceSection />
      </Div>
      {/* </MainLayout> */}
    </>
  );
}

const Div = styled(motion.div)`
  margin-left: 2%;
  margin-top: 5%;
  margin-right: 2%;
  margin-bottom: 10%;
`;

const Typodiv = styled.div`
  color: ${colors.navfontcolor};
  .common {
    font-size: 20px;
    font-family: 'Concert One', cursive;
  }
`;

const Button = styled.button`
  border: none;
  letter-spacing: 1px;
  padding: 10px 50px;
  margin-bottom: 10%;
  margin-top: 10%;
  background: ${colors.fontblue};
  color: white;
  transition: 0.2s linear;
  transform: scale(1, 1);
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    transform: scale(0.95, 0.95);
  }
`;
