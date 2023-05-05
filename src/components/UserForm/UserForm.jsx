import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import {
  Form,
  Input,
  Label,
  Button,
  InputAva,
  ButtonPlus,
  LabelImg,
  LabelAva,
  TitleAvatar,
  TextAvatar,
  DefaultSvg,
  FlexInput,
  AvatarBlock,
  Errors,
  LabelSpan,
  StyledDatePick,
  StyledIconContainer,
  PlusSvg,
  BirthdayContainer,
  ArrowSvg,
} from './UserForm.styled';
import { GlobalStyles } from './UserForm.styled';
import { format } from 'date-fns';

import defaultAvatar from 'images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectUserAvatarURL,
  selectUserBirthday,
  selectUserEmail,
  selectUserName,
  selectUserPhone,
  selectUserTelegram,
} from '../../redux/auth/auth.selectors';

import { userForm } from '../../redux/auth/auth.operations';
import * as Yup from 'yup';

import {
  NAME_REGEX,
  PHONE_REGEX,
  TELEGRAM_REGEX,
} from '../../constants/joiRegex';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

export const UserForm = () => {
  const [image, setImage] = useState();
  const filePicker = useRef();
  const dispatch = useDispatch();

  const [birthdayValidationCompleted, setBirthdayValidationCompleted] =
    useState(false);

  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const phone = useSelector(selectUserPhone) || '';
  const telegram = useSelector(selectUserTelegram) || '';
  const avatar = useSelector(selectUserAvatarURL);
  const birthday = useSelector(selectUserBirthday) || Date.now();
  const isLoading = useSelector(selectIsLoading);

  const formattedDate = format(new Date(birthday), 'yyyy-MM-dd');

  const FILE_SIZE = 2 * 1024 * 1024;
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

  return (
    <>
      {isLoading && <Loader />}
      <Formik
        initialValues={{
          name,
          birthday: formattedDate,
          email,
          phone,
          telegram,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(NAME_REGEX, 'Allow letters, apostrophe, dash and spaces')
            .min(3, 'Too short!')
            .max(16, 'Too long!')
            .required('Name is required'),
          email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
          birthday: Yup.date().required('Birthday is required').nullable(),
          phone: Yup.string()
            .matches(
              PHONE_REGEX,
              'Allow digits, spaces, dashes and can start with +'
            )
            .nullable(),
          telegram: Yup.string()
            .matches(
              TELEGRAM_REGEX,
              'Start with @ and contain only [a-z], [0-9] and _'
            )
            .max(16, 'Too long!')
            .nullable(),
          avatar: Yup.mixed()
            .nullable()
            .test('size', 'File too large', value => {
              if (!value) {
                return true;
              }
              const isGoodSize = value?.size <= FILE_SIZE;
              if (!isGoodSize) {
                toast.error('File too large');
              }
              return isGoodSize;
            })
            .test('format', 'Unsupported Format', value => {
              if (!value) {
                return true;
              }
              const isSupportedFormat = SUPPORTED_FORMATS.includes(value.type);
              if (!isSupportedFormat) {
                toast.error('Unsupported format');
              }
              return isSupportedFormat;
            }),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await dispatch(userForm(values)).unwrap();
          setSubmitting(false);

          toast.success('Form submitted successfully');
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <AvatarBlock>
              <LabelAva htmlFor="avatar">
                {image ? (
                  <LabelImg alt="Avatar" src={image} width="48" height="48" />
                ) : (
                  <>
                    {avatar ? (
                      <LabelImg
                        alt="Avatar"
                        src={avatar}
                        width="48"
                        height="48"
                      />
                    ) : (
                      <DefaultSvg>
                        <use
                          xlinkHref={`${defaultAvatar}#${'profile-avatar-f'}`}
                        />
                      </DefaultSvg>
                    )}
                  </>
                )}
                <InputAva
                  ref={filePicker}
                  type="file"
                  id="avatar"
                  name="avatar"
                  onChange={event => {
                    const file = event.target.files[0];
                    formik.setFieldValue('avatar', file);
                    setImage(URL.createObjectURL(file));
                  }}
                  accept={SUPPORTED_FORMATS.join(', ')}
                />
                <ButtonPlus>
                  <PlusSvg>
                    <use xlinkHref={`${defaultAvatar}#${'profile-plus-s'}`} />
                  </PlusSvg>
                </ButtonPlus>
              </LabelAva>

              <TitleAvatar>{name}</TitleAvatar>
              <TextAvatar>User</TextAvatar>
            </AvatarBlock>

            <FlexInput>
              <Label htmlFor="name">
                <LabelSpan
                  hasError={formik.touched.name && formik.errors.name}
                  success={formik.touched.name && !formik.errors.name}
                >
                  User Name
                </LabelSpan>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  hasError={formik.touched.name && formik.errors.name}
                  success={formik.touched.name && !formik.errors.name}
                  {...formik.getFieldProps('name')}
                />
                <Errors>{formik.touched.name && formik.errors.name}</Errors>
              </Label>

              <BirthdayContainer>
                <Label htmlFor="birthday">
                  <LabelSpan
                    hasError={formik.errors.birthday}
                    success={
                      formik.touched.birthday || birthdayValidationCompleted
                    }
                  >
                    Birthday
                  </LabelSpan>
                  <StyledIconContainer>
                    <ArrowSvg>
                      <use
                        xlinkHref={`${defaultAvatar}#${'user-chevron-down-sf'}`}
                      />
                    </ArrowSvg>
                  </StyledIconContainer>
                </Label>
                <GlobalStyles />
                <StyledDatePick
                  id="birthday"
                  name="birthday"
                  selected={new Date(formik.values.birthday)}
                  onChange={date => {
                    formik.setFieldValue('birthday', date);
                    setBirthdayValidationCompleted(true);
                  }}
                  onBlur={formik.handleBlur}
                  dateFormat="dd-MM-yyyy"
                  maxDate={new Date()}
                  placeholderText="dd-MM-yyyy"
                  formatWeekDay={day => day.charAt(0)}
                  calendarStartDay={1}
                  hasError={formik.touched.birthday && formik.errors.birthday}
                  success={
                    formik.touched.birthday || birthdayValidationCompleted
                  }
                />
                <Errors>
                  {formik.touched.birthday && formik.errors.birthday}
                </Errors>
              </BirthdayContainer>

              <Label htmlFor="email">
                <LabelSpan
                  hasError={formik.touched.email && formik.errors.email}
                  success={formik.touched.email && !formik.errors.email}
                >
                  Email
                </LabelSpan>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  hasError={formik.touched.email && formik.errors.email}
                  success={formik.touched.email && !formik.errors.email}
                  {...formik.getFieldProps('email')}
                />
                <Errors>{formik.touched.email && formik.errors.email}</Errors>
              </Label>
              <Label htmlFor="phone">
                <LabelSpan
                  hasError={formik.touched.phone && formik.errors.phone}
                  success={formik.touched.phone && !formik.errors.phone}
                >
                  Phone
                </LabelSpan>
                <Input
                  id="phone"
                  name="phone"
                  type="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="phone number"
                  value={
                    formik.values.phone === '' || !formik.values.phone
                      ? ''
                      : formik.values.phone
                  }
                  hasError={formik.touched.phone && formik.errors.phone}
                  success={formik.touched.phone && !formik.errors.phone}
                  {...formik.getFieldProps('phone')}
                />
                <Errors>{formik.touched.phone && formik.errors.phone}</Errors>
              </Label>
              <Label htmlFor="telegram">
                <LabelSpan
                  hasError={formik.touched.telegram && formik.errors.telegram}
                  success={formik.touched.telegram && !formik.errors.telegram}
                >
                  Telegram
                </LabelSpan>
                <Input
                  id="telegram"
                  name="telegram"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="telegram"
                  value={
                    formik.values.telegram === '' || !formik.values.telegram
                      ? ''
                      : formik.values.telegram
                  }
                  hasError={formik.touched.telegram && formik.errors.telegram}
                  success={formik.touched.telegram && !formik.errors.telegram}
                  {...formik.getFieldProps('telegram')}
                />
                <Errors>
                  {formik.touched.telegram && formik.errors.telegram}
                </Errors>
              </Label>
            </FlexInput>
            <Button
              type="submit"
              disabled={!(formik.isValid && formik.dirty) || isLoading}
            >
              Save changes
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
