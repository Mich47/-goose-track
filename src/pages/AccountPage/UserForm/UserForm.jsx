import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
} from './UserForm.styled';
import { GlobalStyles } from './UserForm.styled';
import { format } from 'date-fns';

import defaultAvatar from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserAvatarURL,
  selectUserBirthday,
  selectUserEmail,
  selectUserName,
  selectUserPhone,
  selectUserTelegram,
} from '../../../redux/auth/auth.selectors';

import { userForm } from '../../../redux/auth/auth.operations';
import * as Yup from 'yup';

// import { Persist } from 'formik-persist';
import {
  NAME_REGEX,
  PHONE_REGEX,
  TELEGRAM_REGEX,
} from '../../../constants/joiRegex';

export const UserForm = () => {
  const [image, setImage] = useState(null);
  const filePicker = useRef(null);
  const dispatch = useDispatch();

  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const phone = useSelector(selectUserPhone);
  const telegram = useSelector(selectUserTelegram);
  const avatar = useSelector(selectUserAvatarURL);
  const birthday = useSelector(selectUserBirthday) || Date.now();

  const formattedDate = format(new Date(birthday), 'yyyy-MM-dd');

  // const handleFileInputChange = event => {
  //   const file = event.target.files[0];
  //   const imageUrl = URL.createObjectURL(file);
  //   setImage(imageUrl);
  // };

  const handleUpload = async event => {
    event.preventDefault();
    if (!setImage) {
      alert('Please select a file');
      return true;
    }
  };

  // const FILE_SIZE = 2 * 1024 * 1024;
  const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png',
  ];

  return (
    <Formik
      initialValues={{ name, birthday: formattedDate, email, phone, telegram }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(NAME_REGEX, 'Not correct, try again')
          .max(16, 'Too Long!')
          .required('Name is required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
        birthday: Yup.date().required('Birthday is required').nullable(),
        phone: Yup.string()
          .matches(PHONE_REGEX, 'Not correct, try again')
          .nullable(),
        // .required('Number is required'),
        telegram: Yup.string()
          .matches(TELEGRAM_REGEX, 'Not correct, try again')
          .max(16, 'Too Long!')
          .nullable(),
        // avatar: Yup.mixed()
        //   .test('size', 'File too large', value => {
        //     const isGoodSize = value && value.size <= FILE_SIZE;
        //     if (!isGoodSize) {
        //       toast.error('File too large');
        //     }
        //     return isGoodSize;
        //   })
        //   .test('format', 'Unsupported Format', value => {
        //     const isSupportedFormat =
        //       value && SUPPORTED_FORMATS.includes(value.type);
        //     if (!isSupportedFormat) {
        //       toast.error('Unsupported format');
        //     }
        //     return isSupportedFormat;
        //   }),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(userForm(values)).unwrap();
        setSubmitting(false);
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
              <LabelSpan>User Name</LabelSpan>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name ? (
                <Errors>{formik.errors.name}</Errors>
              ) : null}
            </Label>

            <BirthdayContainer>
              <Label htmlFor="birthday">
                <LabelSpan>Birthday</LabelSpan>
                <StyledIconContainer>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    width={'18px'}
                    height={'18px'}
                  />
                </StyledIconContainer>

                {formik.touched.birthday && formik.errors.birthday ? (
                  <Errors>{formik.errors.birthday}</Errors>
                ) : null}
              </Label>
              <GlobalStyles />
              <StyledDatePick
                id="birthday"
                name="birthday"
                selected={new Date(formik.values.birthday)}
                onChange={date => formik.setFieldValue('birthday', date)}
                dateFormat="dd-MMM-yyyy"
                maxDate={new Date()}
                placeholderText="dd-MMM-yyyy"
                formatWeekDay={day => day.charAt(0)}
                calendarStartDay={1}
                disabledKeyboardNavigation
              />
            </BirthdayContainer>

            <Label htmlFor="email">
              <LabelSpan>Email</LabelSpan>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <Errors>{formik.errors.email}</Errors>
              ) : null}
            </Label>
            <Label htmlFor="phone">
              <LabelSpan>Phone</LabelSpan>
              <Input
                id="phone"
                name="phone"
                type="phone"
                onChange={formik.handleChange}
                placeholder="phone number"
                value={
                  formik.values.phone === '' || !formik.values.phone
                    ? ''
                    : formik.values.phone
                }
                {...formik.getFieldProps('phone')}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <Errors>{formik.errors.phone}</Errors>
              ) : null}
            </Label>
            <Label htmlFor="telegram">
              <LabelSpan>Telegram</LabelSpan>
              <Input
                id="telegram"
                name="telegram"
                type="telegram"
                onChange={formik.handleChange}
                placeholder="telegram"
                value={
                  formik.values.telegram === '' || !formik.values.telegram
                    ? ''
                    : formik.values.telegram
                }
                {...formik.getFieldProps('telegram')}
              />
              {formik.touched.telegram && formik.errors.telegram ? (
                <Errors>{formik.errors.telegram}</Errors>
              ) : null}
            </Label>
          </FlexInput>

          <Button
            onSubmit={handleUpload}
            type="submit"
            disabled={!formik.isValid}
          >
            Save changes
          </Button>
          {/* <Persist name="user-form" /> */}
        </Form>
      )}
    </Formik>
  );
};
