/**
 *
 * BlogCard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import colors from 'styles/colors';

interface Props {}

export function BlogCard(props: Props) {
  return (
    <Div>
      <div className="maindiv">
        <div className="image">
          <DateArea className="text-white">
            <span className="datetxt">29</span>
            <span className="monthtxt">FEB</span>
          </DateArea>
          <img
            src="https://tf-react-chester.now.sh/images/blog-image-1.jpg"
            alt="just an image"
            height="100%"
            width="100%"
          />
        </div>
        <div className="header text-white">
          <h3>Title of the project</h3>
        </div>
      </div>
    </Div>
  );
}

const DateArea = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${colors.navhovercolor};
  position: absolute;
  z-index: 1;
  top: 10%;
  left: 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Vollkorn';
  .datetxt {
    font-size: 2.4rem;
    margin-bottom: -10%;
    margin-top: -10%;
  }
  .monthtxt {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    left: 10%;
  }
`;

const Div = styled.div`
  height: 300px;
  margin-bottom: 20%;
  .maindiv {
    position: relative;
    padding: 20px;
    background-color: ${colors.navpurpleblue};
  }
  .image {
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      transform: scale(1);
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.3);
      }
    }
  }
  .header {
    margin-top: 4%;
    margin-bottom: -2%;
    font-family: 'Vollkorn', serif;
  }
  @media (max-width: 768px) {
    margin-left: 3%;
    margin-right: 3%;
  }
`;
