/**
 *
 * ServiceCard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import colors from 'styles/colors';
import { FaReact } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

interface Props {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export function ServiceCard(props: Props) {
  return (
    <Div>
      <div className="upperhead"></div>
      <h1 className="text-primary icons common">{props.icon}</h1>
      <h1 className="text-white common typo">{props.title}</h1>
      <hr className="underlineprop" />
      <p className="subheading common">{props.subtitle}</p>
    </Div>
  );
}

const Div = styled.div`
  background: ${colors.navpurpleblue};
  min-height: 250px;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  .upperhead {
    height: 5px;
    background: rgba(255, 255, 255, 0.3);
    transition: 0.5s ease-in-out;
  }
  .icons {
    font-size: 50px;
  }
  .underlineprop {
    color: rgba(255, 255, 255, 0.3);
    margin-left: 3%;
    width: 15%;
  }
  .subheading {
    font-family: 'Ubuntu', sans-serif;
    line-height: 1.8rem;
    color: ${colors.navfontcolor};
    font-size: 1.125rem;
    letter-spacing: 1px;
  }
  .common {
    margin-top: 2%;
    padding-left: 4%;
    padding-right: 4%;
  }
  .typo {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.43rem;
  }
  &:hover {
    .upperhead {
      background: ${colors.navhovercolor};
    }
  }
`;
