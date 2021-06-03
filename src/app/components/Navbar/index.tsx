/**
 *
 * Navbar
 *
 */
import * as React from 'react';
import colors from '../../../styles/colors';
import styled, { keyframes } from 'styled-components';
import birimg from '../../../assets/images/bir4.jpg';
import { NavLink } from 'react-router-dom';
import navdata from './navdata';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
import { slideInLeft } from 'react-animations';
import { slideOutLeft } from 'react-animations';

interface styledNavIconProps {
  position: string;
  right: string;
}

interface styledAnimationProps {
  inAnimation: boolean;
}

const slideInAnimation = keyframes`${slideInLeft}`;
const slideOutAnimation = keyframes`${slideOutLeft}`;

const Styledul = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .li {
    width: 100%;
    margin: 3px 0;
    color: ${colors.navfontcolor};
    text-align: center;
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.94rem;
    font-weight: 600;
    :active {
      background: ${colors.navhovercolor};
    }
  }
  .hvr-sweep-to-right {
    &:before {
      background: ${colors.navhovercolor};
      opacity: 0.3;
    }
  }
  .myactive {
    background: ${colors.navhovercolor};
    color: white;
  }
`;

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  position: fixed;
  height: 100%;
  background: ${colors.navpurpleblue};

  .flexprops {
    flex: 1;
    width: 100%;
  }
  border-right: 3px solid rgba(255, 255, 255, 0.3);
  .imagearea {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Img = styled.img`
  border-radius: 50%;
  border: 7px solid rgba(255, 255, 255, 0.3); ;
`;

const SlideDiv = styled.div`
  position: fixed;
  animation: 1s
    ${(props: styledAnimationProps) =>
      props.inAnimation ? slideInAnimation : slideOutAnimation};
`;

const NavMobileIcon = styled.div`
  height: 50px;
  width: 50px;
  position: ${(props: styledNavIconProps) => props.position};
  right: ${(props: styledNavIconProps) => props.right};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.navpurpleblue};
  color: white;
  border: 2px solid #2e344e;
`;

export function NavbarPortfolio({ history }) {
  const [navobj, setNavobj] = React.useState(navdata);
  const [isMobile, setIsMobile] = React.useState(
    window.matchMedia('(max-width:768px)').matches,
  );

  React.useEffect(() => {
    handleActiveArea();
  }, [history.location.pathname]);

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

  const handleActiveArea = () => {
    let newobj = [...navobj];
    newobj.map(item => {
      item.isactive = false;
    });
    newobj.map(item => {
      if (item.path === history.location.pathname) {
        if (item.path.includes('/blogs')) {
          item.isactive = true;
        }
        item.isactive = true;
      }
    });
    setNavobj(newobj);
  };

  const WebNavBar = ({ mobile = false }) => {
    return (
      <Maindiv
        className="py-4"
        style={
          mobile
            ? { width: '70vw', height: '100vh', zIndex: 1000 }
            : { zIndex: 1000 }
        }
      >
        <div className="ml-2 pb-4 imagearea">
          <Img
            src={birimg}
            alt="userimage"
            className="img-fluid"
            style={mobile ? { height: '125px', width: '125px' } : {}}
          />
        </div>
        <div className="flexprops d-flex flex-colum mt-3">
          <Styledul className="pr-3">
            {navobj.map((item, index) => {
              let finalClass = item.isactive
                ? 'li py-2 hvr-sweep-to-right myactive'
                : 'li py-2 hvr-sweep-to-right';
              return (
                <NavLink
                  className={finalClass}
                  to={item.path}
                  onClick={handleActiveArea}
                  key={index}
                >
                  {item.title.toUpperCase()}
                </NavLink>
              );
            })}
          </Styledul>
        </div>
      </Maindiv>
    );
  };

  const MobileNavBar = () => {
    const [showNavBar, setShowNavBar] = React.useState(false);

    const handleNavClick = () => {
      setShowNavBar(!showNavBar);
    };
    return (
      <>
        {showNavBar ? (
          <SlideDiv className="d-flex" inAnimation={true}>
            <WebNavBar mobile={true} />
            <NavMobileIcon
              position="absolute"
              right="-20px"
              onClick={handleNavClick}
            >
              <AiOutlineCaretLeft />
            </NavMobileIcon>
          </SlideDiv>
        ) : (
          <NavMobileIcon
            position="relative"
            right="-5px"
            onClick={handleNavClick}
          >
            <AiOutlineCaretRight />
          </NavMobileIcon>
        )}
      </>
    );
  };

  if (isMobile) {
    return <MobileNavBar />;
  } else {
    return <WebNavBar />;
  }
}
