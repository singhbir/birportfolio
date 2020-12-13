/**
 *
 * Loaderbars
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface Props {}

export function Loaderbars(props: Props) {
  return (
    <Div>
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
