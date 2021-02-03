/**
 *
 * MainLayout
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';
import { NavbarPortfolio } from '../Navbar/Loadable';
import colors from 'styles/colors';

interface MainLayoutProps {
  history: object;
  children?: React.ReactNode;
}

const BG = styled.div`
  background: ${colors.mainbackgroundblue};
  height: 100%;
  width: 100%;
`;

const webstyle = { height: '100vh', width: '22vw' };
const mobilestyle = { zIndex: 100 };

export const MainLayout: React.FC<MainLayoutProps> = ({
  history,
  children,
}) => {
  const [isMobile, setIsMobile] = React.useState(
    window.matchMedia('(max-width:768px)').matches,
  );

  React.useEffect(() => {
    window.addEventListener('resize', () =>
      setIsMobile(window.matchMedia('(max-width:768px)').matches),
    );
    return () => {
      window.removeEventListener('resize', () =>
        setIsMobile(window.matchMedia('(max-width:768px)').matches),
      );
    };
  }, []);

  return (
    <Container
      fluid
      className="d-flex"
      style={isMobile ? { padding: 0, margin: 0 } : {}}
    >
      <Row
        style={isMobile ? mobilestyle : webstyle}
        className={isMobile ? 'position-fixed' : ''}
      >
        <NavbarPortfolio history={history} />
      </Row>
      <Row style={{ flex: 1 }}>
        <BG>{children}</BG>
      </Row>
    </Container>
  );
};

const Div = styled.div``;
