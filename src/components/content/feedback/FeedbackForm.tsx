import React from 'react';
import { Field, Formik, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useI18next } from 'gatsby-plugin-react-i18next';
import withCaptcha, { CaptchaProps } from '../../../shared/hocs/withCaptcha';
import { Box, Button, CircularProgress, Stack } from '@mui/material';
import { TextField } from 'formik-mui';
import './feedback.scss';

type FeedbackFormValues = {
  name: string;
  email: string;
  details: string;
};

const defaultFeedbackFormValues: Readonly<FeedbackFormValues> = {
  name: '',
  email: '',
  details: '',
};

const signInValidationScheme = (t: (key: string) => string) =>
  Yup.object().shape({
    name: Yup.string().required(() => t('account:fields.user.required')),
    email: Yup.string()
      .email(() => t('account:fields.password.required'))
      .required(() => t('account:fields.password.required')),
    details: Yup.string().required(() => t('account:fields.password.required')),
  });

type FeedbackFormProps = CaptchaProps;

const FeedbackForm = ({ getToken }: FeedbackFormProps) => {
  const { t } = useI18next();

  const handleSubmit = async (
    formValues: FeedbackFormValues,
    formikProps: FormikHelpers<FeedbackFormValues>
  ): Promise<void> => {
    const captchaToken = await getToken();
    formikProps.setSubmitting(false);
    // TODO
  };

  return (
    <Formik
      initialValues={defaultFeedbackFormValues}
      validationSchema={signInValidationScheme(t)}
      validateOnMount
      onSubmit={handleSubmit}
    >
      {(formikProps: FormikProps<FeedbackFormValues>) => (
        <Stack direction="column" spacing={3}>
          <Stack direction="row" spacing={3}>
            <Field
              className="feedback__input"
              component={TextField}
              required
              type="text"
              fullWidth
              name="name"
              label="Name"
            />
            <Field
              className="feedback__input"
              component={TextField}
              required
              type="text"
              fullWidth
              name="email"
              label="Email"
            />
          </Stack>
          <Field
            className="feedback__input"
            component={TextField}
            required
            type="text"
            fullWidth
            name="details"
            label="Details"
            multiline
            rows={5}
          />
          <Box className="feedback__buttons">
            <Button
              className="yellow-orange-button"
              variant="contained"
              disabled={formikProps.isSubmitting || !formikProps.isValid}
              onClick={formikProps.submitForm}
            >
              <Stack direction="row" spacing={1}>
                {formikProps.isSubmitting && <CircularProgress color="inherit" size={20} />}
                <Box>Submit</Box>
              </Stack>
            </Button>
          </Box>
        </Stack>
      )}
    </Formik>
  );
};

export default withCaptcha(FeedbackForm);
