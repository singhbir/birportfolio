/**
 *
 * Contact
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import axios from 'axios';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { contactActions, reducer, sliceKey } from './slice';
import {
  selectContact,
  selectLoadContact,
  selectFailContact,
} from './selectors';
import { contactSaga } from './saga';
import { MainLayout } from 'app/components/MainLayout/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { CustomTextField } from 'app/components/TextField';
import { Formik, Form, FormikProps } from 'formik';
import colors from '../../../styles/colors';
import { ContactCard } from 'app/components/ContactCard/Loadable';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import validationSchema from '../../components/_service/validationschema';
require('dotenv').config();

interface Props {
  history: object;
}

export function Contact(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: contactSaga });
  const [initialvalues, setInitialvalues] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  React.useEffect(() => {
    dispatch(contactActions.loadContactDetails());
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const contact = useSelector(selectContact);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const handleFormData = data => {
    console.log('FORM DATA', data);
    const URL = process.env.REACT_APP_FORM_API || '';
    axios
      .post(URL, data)
      .then(r => {
        console.log('EMAIL SENT SUCCESSFULLY');
      })
      .catch(r => {
        console.log('ERROR EMAIL');
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Description of Contact" />
      </Helmet>
      {/* <MainLayout history={props.history}> */}
      <Div>
        <div className="margin">
          <Header title="Contact Me" />
          <div className="row">
            <div className="col-md-6">
              <Formik
                initialValues={initialvalues}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  handleFormData(data);
                  resetForm();
                  setSubmitting(false);
                }}
                validationSchema={validationSchema.contactSchema}
              >
                {myprops => {
                  return (
                    <Form>
                      <CustomTextField
                        label="Enter your name"
                        name="name"
                        type="text"
                        {...myprops}
                      />
                      <CustomTextField
                        label="Enter your email"
                        name="email"
                        type="text"
                        {...myprops}
                      />
                      <CustomTextField
                        label="Enter your subject"
                        name="subject"
                        type="text"
                        {...myprops}
                      />
                      <CustomTextField
                        label="Enter your message"
                        name="message"
                        type="text"
                        {...myprops}
                      />
                      <Button type="submit">Send Mail</Button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
            <div className="col-md-6">
              {contact.map(item => {
                let icon;
                if (item.type.toLowerCase() === 'phone') {
                  icon = FiPhone;
                } else if (item.type.toLowerCase() === 'email') {
                  icon = HiOutlineMail;
                } else {
                  icon = IoLocationOutline;
                }

                return (
                  <ContactCard
                    icon={icon}
                    title={item.type.toUpperCase()}
                    subtitle={item.detail.data}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Div>
      {/* </MainLayout> */}
    </>
  );
}

const Div = styled.div`
  .margin {
    margin-left: 20px;
    margin-top: 50px;
  }
`;

const Button = styled.button`
  border: none;
  letter-spacing: 1px;
  padding: 10px 50px;
  margin-bottom: 10%;
  background: ${colors.fontblue};
  color: white;
  transition: 0.2s linear;
  transform: scale(1, 1);
  &:hover {
    transform: scale(0.95, 0.95);
  }
`;
