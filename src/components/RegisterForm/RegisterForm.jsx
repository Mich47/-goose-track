import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { NAME_REGEX, PASSWORD_REGEX } from '../../constants/joiRegex';
import { useState } from 'react';
import icon from '../../images/sprite.svg';
import { selectIsLoading } from 'redux/auth/auth.selectors';
import { Loader } from 'components/Loader/Loader';

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
      'Must contain minimum 6 characters, at least 1 letter and 1 number'
    )
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isPass, setIsPass] = useState(true);
  const [nameValidationCompleted, setNameValidationCompleted] = useState(false);
  const [emailValidationCompleted, setEmailValidationCompleted] =
    useState(false);
  const [passwordValidationCompleted, setPasswordValidationCompleted] =
    useState(false);

  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
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
              error || "It seems like your goose didn't fly. Please try again."
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
          isSubmitting,
        }) => (
          <STC.Box>
            <STC.Container>
              <STC.Form onSubmit={handleSubmit} autoComplete="on">
                <STC.Title>Sign Up</STC.Title>
                <STC.Label htmlFor="name">
                  <STC.Span error={errors.name} touched={touched.name}>
                    Name
                  </STC.Span>
                  <STC.Input
                    id="name"
                    name="name"
                    type="text"
                    onBlur={event => {
                      handleBlur(event);
                      setNameValidationCompleted(true);
                    }}
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    error={errors.name}
                    touched={touched.name}
                  />
                  <STC.Errors error={errors.name && touched.name}>
                    {nameValidationCompleted &&
                      (errors.name && touched.name ? (
                        <span>{errors.name}</span>
                      ) : (
                        <span>This is an CORRECT name</span>
                      ))}
                  </STC.Errors>
                </STC.Label>

                <STC.Label htmlFor="email">
                  <STC.Span error={errors.email} touched={touched.email}>
                    Email
                  </STC.Span>
                  <STC.Input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onBlur={event => {
                      handleBlur(event);
                      setEmailValidationCompleted(true);
                    }}
                    onChange={handleChange}
                    placeholder="Enter email"
                    error={errors.email}
                    touched={touched.email}
                  />
                  <STC.Errors error={errors.email && touched.email}>
                    {emailValidationCompleted &&
                      (errors.email && touched.email ? (
                        <span>{errors.email}</span>
                      ) : (
                        <span>This is an CORRECT email</span>
                      ))}
                  </STC.Errors>
                </STC.Label>

                <STC.Label
                  htmlFor="password"
                  // error={errors.password && touched.password}
                >
                  <STC.Span error={errors.password} touched={touched.password}>
                    Password
                  </STC.Span>
                  <STC.Input
                    id="password"
                    name="password"
                    type={isPass ? 'password' : 'text'}
                    required
                    autoComplete="off"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={event => {
                      handleBlur(event);
                      setPasswordValidationCompleted(true);
                    }}
                    // error={errors.password && touched.password}
                    error={errors.password}
                    touched={touched.password}
                  />
                  <STC.Errors error={errors.password && touched.password}>
                    {passwordValidationCompleted &&
                      (errors.password && touched.password ? (
                        <span>{errors.password}</span>
                      ) : (
                        <span>This is an CORRECT password</span>
                      ))}
                  </STC.Errors>

                  <STC.ButtonEye
                    type="button"
                    onClick={() => {
                      isPass ? setIsPass(false) : setIsPass(true);
                    }}
                  >
                    {isPass ? (
                      <STC.SvgEye>
                        <use xlinkHref={`${icon}#closed-eye`}></use>
                      </STC.SvgEye>
                    ) : (
                      <STC.SvgEye>
                        <use xlinkHref={`${icon}#opened-eye`}></use>
                      </STC.SvgEye>
                    )}
                  </STC.ButtonEye>
                </STC.Label>

                <STC.Button type="submit" disabled={isSubmitting || isLoading}>
                  <STC.BtnSpan>Sign Up</STC.BtnSpan>
                  <STC.Svg>
                    <use href={`${logInIcon}#log-in`} />
                  </STC.Svg>
                </STC.Button>
              </STC.Form>

              <AuthNavigate route="/login" title="Log In" />

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
      )
    </>
  );
};
