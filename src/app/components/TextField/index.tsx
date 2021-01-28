/**
 *
 * TextField
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { TextField } from '@material-ui/core';
import { FieldAttributes, useField } from 'formik';
import colors from 'styles/colors';

interface Props {}

export const CustomTextField: React.FC<any> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField<any>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <Div>
        <div className="wrapper">
          <label className="label">{label} *</label>
          <input {...field} {...props} />
        </div>
      </Div>
      {errorText !== '' ? (
        <Alert className="alert alert-danger">{errorText}</Alert>
      ) : (
        <></>
      )}
    </>
  );
};

const Alert = styled.div`
  margin-top: -5%;
  margin-bottom: 7%;
`;

const Div = styled.div`
  position: relative;
  border: 0.5px solid ${colors.fontcolorgrey};
  padding: 20px 10px;
  margin-bottom: 40px;
  margin-right: 20px;
  input {
    width: 100%;
    background: none;
    border: none;
    color: ${colors.fontcolorgrey};

    &:focus {
      outline: none;
    }
  }
  .label {
    position: absolute;
    top: -12px;
    padding: 0px 10px;
    color: ${colors.fontcolorgrey};
    background: ${colors.mainbackgroundblue};
    font-family: 'Ubuntu';
  }
  .wrapper {
  }
`;
