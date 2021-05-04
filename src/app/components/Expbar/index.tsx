/**
 *
 * Expbar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import colors from 'styles/colors';

interface keyable {
  [key: string]: any;
}
interface Props {
  data: Array<keyable>;
  vidata: string;
}

export function Expbar(props: Props) {
  const bluecolor = colors.mainbackgroundblue;
  const [sortedData, setSortedData] = React.useState(props.data);
  const [visualData, setVisualData] = React.useState<any>([]);

  React.useEffect(() => {
    seperateData();
  }, []);

  const seperateData = () => {
    const tempVisualData: any[] = [];
    sortedData.map(item => {
      if (item.category === props.vidata) {
        tempVisualData.push(item);
      }
    });
    sortData(tempVisualData);
  };

  const sortData = data => {
    let sortme = data;
    let sortedarr = sortme.slice().sort((a, b) => b.index - a.index);
    setVisualData(sortedarr);
  };

  const Description = ({ startdate, enddate, heading, subheading, desc }) => {
    return (
      <Descwrapper className="row align-items-start">
        <div className="col-md-4 date">
          {startdate.toUpperCase()} - {enddate.toUpperCase()}
        </div>
        <div className="col-md-8">
          <Heading>{heading.toUpperCase()}</Heading>
          <SubHeading>{subheading}</SubHeading>
          <Desc>{desc}</Desc>
        </div>
      </Descwrapper>
    );
  };

  return (
    <Div>
      <UL>
        {visualData.map((item, i) => {
          return (
            <LI color={bluecolor} key={i}>
              <Description
                startdate={item.startdate}
                enddate={item.enddate}
                heading={item.designation}
                subheading={item.organisation}
                desc={item.description}
              />
            </LI>
          );
        })}
      </UL>
    </Div>
  );
}

const Div = styled.div``;

const UL = styled.ul`
  border-left: 3px solid lightgrey;
  margin: 1em;
  padding: 0;
`;

const LI = styled.li`
  list-style: none;
  color: white;
  margin: 0em 0em 3em 0em;
  padding: 0;
  &:before {
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    margin: 0 0.5em 0 -0.65em;
    border-radius: 50%;
    content: '';
    text-align: center;
    border: 1px solid lightgrey;
    background: ${props => props.color};
  }
`;

const Heading = styled.div`
  color: ${colors.fontblue};
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-family: 'Concert One', cursive;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SubHeading = styled.div`
  color: white;
  font-weight: 500;
  font-family: 'Ubuntu';
  letter-spacing: 1px;
  font-size: 1.3rem;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Desc = styled.div`
  font-family: 'Ubuntu';
  color: ${colors.fontcolorgrey};
`;

const Descwrapper = styled.div`
  margin-left: 1rem;
  margin-top: -2.5em;
  .date {
    font-size: 1.14rem;
    font-family: 'Ubuntu', sans-serif;
    color: ${colors.fontcolorgrey};
    margin-top: 10px;
  }
`;
