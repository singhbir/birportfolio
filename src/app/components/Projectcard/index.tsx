/**
 *
 * Projectcard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import colors from '../../../styles/colors';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { FaChrome } from 'react-icons/fa';
import global from '../../components/_service/global';

const baseURL = global.domain;

interface Props {
  heading: string;
  subheading: string;
  githuburl: string;
  websiteurl: string;
  image: string;
}
//
export function Projectcard(props: Props) {
  const imageurlarr = props.image.split('');
  imageurlarr.shift();
  const URL = baseURL + imageurlarr.join('');
  console.log('URL', URL);
  return (
    <Div>
      <div className="positionrelative mainDiv overflow hoverme">
        <div className="mainDiv positionabsolute">
          <img src={URL} width="100%" height="100%" />
        </div>
        <div className="secondDiv positionabsolute centerme transitions">
          <a href={props.websiteurl} target="_blanc" className="iconstyle">
            <FaChrome />
          </a>
          <a href={props.githuburl} target="_blanc" className="iconstyle">
            <BsFileEarmarkCode />
          </a>
        </div>
      </div>
      <h5 className="headingtext">{props.heading}</h5>
      <span className="subheadingtext">{props.subheading}</span>
    </Div>
  );
}

const Div = styled.div`
  .headingtext {
    font-size: 1.7rem;
    font-weight: 700;
    color: white;
    font-family: 'Concert One', cursive;
    margin-bottom: 20px;
  }
  .subheadingtext {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${colors.fontcolorgrey};
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
  }
  .positionrelative {
    position: relative;
  }
  .centerme {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overflow {
    overflow: hidden;
  }
  .iconstyle {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    background: grey;
    color: white;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    display: none;
    text-decoration: none;
  }
  .transitions {
    opacity: 1;
    /* transform: translateX(-100px); */
    transition: linear 0.4s;
  }
  .hoverme {
    &:hover {
      .transitions {
        opacity: 0.8;
        width: 97%;
        /* transform: translateX(-10px); */
      }
      .iconstyle {
        display: inline-flex;
      }
    }
  }
  .positionabsolute {
    position: absolute;
    z-index: 2;
    background: white;
  }
  .mainDiv {
    width: 100%;
    height: 250px;
  }
  .secondDiv {
    width: 0%;
    height: 220px;
    top: 6%;
    left: 2%;
    right: -6%;
  }
`;
