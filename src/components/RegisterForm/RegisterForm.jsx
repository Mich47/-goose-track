import * as React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { signupUser } from '../../redux/auth/auth.operations';
import { Formik } from 'formik';
import logInIcon from '../../images/logInIcon.svg';
import logInCloud from '../../images/sprite.svg';
import LoginGoose from '../../images/login-goose-.svg';
import * as STC from '../LoginForm/LoginForm.styled';
import { LoginImg, LoginImg2, Text, Span } from './RegisterForm.styled';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { useState } from 'react';
import {
  NAME_REGEX,
  PASSWORD_REGEX,
} from '../../constants/joiRegex';

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(NAME_REGEX, 'Not correct, try again')
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Name is required'),
  email: Yup.string().email('This is an ERROR email').required('Required'),
  password: Yup.string()
    .matches(
      PASSWORD_REGEX,
      'must contain minimum 6 characters,at least 1 letter and 1 number'
    )
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isPass, setIsPass] = useState(true);

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegisterValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await dispatch(
              signupUser({
                name: values.name,
                email: values.email,
                password: values.password,
              })
            ).unwrap();
            setSubmitting(false);
            resetForm();
          } catch (error) {
            setSubmitting(false);
            toast.error(
              error ||
              "It seems like your goose didn't fly. Please try again."
            );
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <STC.Box>
            <STC.Container>
              <STC.Form onSubmit={handleSubmit} autoComplete="on">
                <STC.Title>Sign Up</STC.Title>
                <STC.Label htmlFor="name">
                  <STC.Span>Name</STC.Span>
                  <STC.Input
                    id="name"
                    name="name"
                    type="text"
                    onBlur={handleBlur}
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  <STC.Errors>
                    {errors.name && touched.name && errors.name}
                  </STC.Errors>
                </STC.Label>

                <STC.Label htmlFor="email">
                  <STC.Span>Email</STC.Span>
                  <STC.Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                  <STC.Errors>
                    {errors.email && touched.email && errors.email}
                  </STC.Errors>
                </STC.Label>

                <STC.Label htmlFor="password">
                  <STC.Span>Password</STC.Span>
                  <STC.Input
                    id="password"
                    name="password"
                    type={isPass ? 'password' : 'text'}
                    required
                    autoComplete="off"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <STC.Errors>
                    {errors.password && touched.password && errors.password}
                  </STC.Errors>
                  <STC.ButtonEye
                    type="button"
                    onClick={() => {
                      isPass ? setIsPass(false) : setIsPass(true);
                    }}
                  >
                    {' '}
                    {isPass ? (
                      <img
                        src="https://img.icons8.com/windows/32/null/eyelashes-2d--v2.png"
                        alt="eye"
                        width="16"
                        height="16"
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/ultraviolet/40/null/visible.png"
                        alt="eye"
                        width="16"
                        height="16"
                      />
                    )}
                  </STC.ButtonEye>
                </STC.Label>

                <STC.Button type="submit">
                  <STC.BtnSpan>Sign Up</STC.BtnSpan>
                  <STC.Svg>
                    <use href={`${logInIcon}#log-in`} />
                  </STC.Svg>
                </STC.Button>
              </STC.Form>
              
              <AuthNavigate route="/login" title="Log In"/>

              <LoginImg
                alt="LoginGoose"
                src={`${LoginGoose}`}
                width="353"
                height="330"
              />
              <LoginImg2 width="50" height="50">
                <use xlinkHref={`${logInCloud}#${'login-cloud'}`} />
              </LoginImg2>
              <Text>
                Quickly <Span>register</Span> and familiarize yourself with the
                application!
              </Text>
            </STC.Container>
          </STC.Box>
        )}
      </Formik>
    </>
  );
};
