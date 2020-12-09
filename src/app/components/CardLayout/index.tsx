/**
 *
 * CardLayout
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Card } from 'react-bootstrap';

const StyledCard = styled(Card)`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export function CardLayout({ children }) {
  return (
    <StyledCard bg="dark" text="white">
      <Card.Body>{children}</Card.Body>
    </StyledCard>
  );
}

const Div = styled.div``;
