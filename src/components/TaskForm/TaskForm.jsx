import React from 'react';
import { useParams } from 'react-router';
import { Formik } from 'formik';
import { isAfter, isValid, parse } from 'date-fns';
import * as Yup from 'yup';
import * as STC from './TaskForm.styled';
import icon from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import {
  addTaskOperation,
  editTaskOperation,
} from '../../redux/calendar/calendar.operations';

export const TaskForm = ({ onClose, ...props }) => {
  const dispatch = useDispatch();
  const editMode = props?.editMode || false;
  const status = props?.status.name || 'To do';

  const initialValues = {
    title: props?.title || '',
    start: props?.start || '',
    end: props?.end || '',
    priority: props?.priority || 'Low',
  };

  const { currentDay: date } = useParams();

  const handleAdd = values => {
    if (!editMode) {
      const payload = { ...values, date, status };
      dispatch(addTaskOperation(payload));
      onClose();
    } else {
      const payload = { ...values, date, status, _id: props._id };
      dispatch(editTaskOperation(payload));

      onClose();
    }
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .max(250, 'Title should not exceed 250 characters'),
    start: Yup.string()
      .test('valid-time', 'Invalid time format', value =>
        isValid(parse(value, 'HH:mm', new Date()))
      )
      .required('Start is required'),
    end: Yup.string()
      .nullable()
      .test('valid-time', 'Invalid time format', value => {
        if (!value) return true; // return true if value is empty
        return isValid(parse(value, 'HH:mm', new Date()));
      })
      .when('start', (start, schema) =>
        schema.test('end-time-greater', 'Less than start', end =>
          start && end
            ? isAfter(
                parse(end, 'HH:mm', new Date()),
                parse(start, 'HH:mm', new Date())
              )
            : true
        )
      ),
    priority: Yup.string()
      .required('Priority is required')
      .oneOf(['Low', 'Medium', 'High'], 'Invalid priority'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleAdd(values);
          setSubmitting(false);
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
          setFieldValue,
          /* and other goodies */
        }) => (
          <STC.Form onSubmit={handleSubmit}>
            <STC.Label htmlFor="title">
              <STC.Span>Title</STC.Span>
              <STC.Input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="Enter text"
              />
              <STC.Errors>
                {errors.title && touched.title && errors.title}
              </STC.Errors>
            </STC.Label>

            <STC.Wrapper>
              <STC.Label htmlFor="start">
                <STC.Span>Start</STC.Span>
                <STC.Input
                  type="time"
                  step="60"
                  name="start"
                  id="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                  placeholder="Select time"
                />
                <STC.Errors>
                  {errors.start && touched.start && errors.start}
                </STC.Errors>
              </STC.Label>

              <STC.Label htmlFor="end">
                <STC.Span>End</STC.Span>
                <STC.Input
                  type="time"
                  step="60"
                  name="end"
                  id="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                  placeholder="Select time"
                />
                <STC.Errors>
                  {errors.end && touched.end && errors.end}
                </STC.Errors>
              </STC.Label>
            </STC.Wrapper>

            <STC.RadioButtonGroup>
              {['Low', 'Medium', 'High'].map(priority => (
                <STC.RadioButtonLabel key={priority}>
                  <STC.RadioButtonInput
                    type="radio"
                    value={priority}
                    name="priority"
                    checked={values.priority === priority}
                    onChange={() => {
                      setFieldValue('priority', priority);
                    }}
                  />
                  {priority}
                </STC.RadioButtonLabel>
              ))}
            </STC.RadioButtonGroup>

            <STC.Wrapper>
              {!editMode ? (
                <>
                  <STC.Button type="submit">
                    <STC.Svg>
                      <use href={`${icon}#add-btn-s`} />
                    </STC.Svg>
                    Add
                  </STC.Button>
                  <STC.ButtonCancel
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      onClose();
                    }}
                  >
                    Cancel
                  </STC.ButtonCancel>
                </>
              ) : (
                <STC.Button type="submit" disabled={isSubmitting}>
                  <STC.Svg>
                    <use href={`${icon}#edit-btn-s`} />
                  </STC.Svg>
                  Edit
                </STC.Button>
              )}
            </STC.Wrapper>
          </STC.Form>
        )}
      </Formik>
    </>
  );
};
