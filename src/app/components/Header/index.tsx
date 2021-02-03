/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { ProgressBar } from 'react-bootstrap';
import colors from 'styles/colors';

interface Props {
  title: string;
}

interface styledDivProps {
  ismobile: boolean;
}

export function Header(props: Props) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  return (
    <Div ismobile={isMobile}>
      <H2>{props.title}</H2>
      <H1>{props.title}</H1>
      <ProgressBar
        variant={colors.fontblue}
        now={45}
        style={{
          height: '0.3rem',
          width: '10%',
          position: 'absolute',
          background: '#1C3564',
          top: '140%',
          left: '1%',
        }}
      />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  /* margin-top: ${(props: styledDivProps) =>
    props.ismobile ? '20%' : '0%'};
  margin-bottom: ${(props: styledDivProps) =>
    props.ismobile ? '20%' : '10%'}; */
  margin-top: 0%;
  margin-bottom: 10%;
  @media (max-width: 768px) {
    margin-top: 20%;
    margin-bottom: 20%;
  }
`;
const H2 = styled.h2`
  color: white;
  font-family: 'Concert One', cursive;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 3rem;
`;

const H1 = styled.h1`
  color: rgba(25, 29, 43, 0.44);
  font-family: 'Concert One', cursive;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  font-size: 5rem;
  position: absolute;
  top: 25px;
  text-transform: uppercase;
`;
