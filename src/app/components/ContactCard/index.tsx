/**
 *
 * ContactCard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { FiPhone } from 'react-icons/fi';
import { IconType } from 'react-icons';
import colors from '../../../styles/colors';
interface Props {
  icon: IconType;
  title: string;
  subtitle: [];
}

export function ContactCard(props: Props) {
  return (
    <Div>
      <div className="wrapper">
        <div className="icons">
          <props.icon />
        </div>
        <div className="details">
          <div className="header">{props.title}</div>
          {props.subtitle.map(item => {
            return <div className="subheaders">{item}</div>;
          })}
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background: ${colors.navpurpleblue};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 20px;
  margin-bottom: 7%;
  margin-right: 3%;
  .wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .icons {
    color: ${colors.fontcolorgrey};
    margin-left: 5%;
    font-size: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 10px 20px;
  }
  .details {
    margin-left: 5%;
  }
  .header {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    color: white;
    font-size: 1.2rem;
  }
  .subheaders {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Roboto Mono', monospace;
    color: ${colors.fontcolorgrey};
    margin-bottom: 2%;
  }
`;
