/**
 *
 * SocialArea
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

import colors from 'styles/colors';
interface Props {}

const LinkedIn = styled(FiLinkedin)`
  color: white;
  font-size: 2.5rem;
`;

const Github = styled(FiGithub)`
  color: white;
  font-size: 2.5rem;
  margin-left: 10px;
`;

const LINKEDINURL = 'https://www.linkedin.com/in/birvarindersingh/';
const GITHUBURL = 'https://github.com/singhbir?tab=repositories';

export function SocialArea(props: Props) {
  return (
    <Div>
      <a rel="noopener noreferrer" target="_blank" href={LINKEDINURL}>
        <LinkedIn className="circular" />
      </a>
      <a rel="noopener noreferrer" target="_blank" href={GITHUBURL}>
        <Github className="circular" />
      </a>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  margin-top: 10px;
  .circular {
    transition: 0.5s linear;
    border: 1px solid white;
    border-radius: 50%;
    padding: 7px;
    :hover {
      color: ${colors.fontblue};
      border-color: ${colors.fontblue};
    }
  }
`;
