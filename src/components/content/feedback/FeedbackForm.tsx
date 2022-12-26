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
  message: string;
};

const defaultFeedbackFormValues: Readonly<FeedbackFormValues> = {
  name: '',
  email: '',
  message: '',
};

const signInValidationScheme = (t: (key: string) => string) =>
  Yup.object().shape({
    name: Yup.string().required(() => t('index.feedback.fields.name.required')),
    email: Yup.string()
      .email(() => t('index.feedback.fields.email.email'))
      .required(() => t('index.feedback.fields.email.required')),
    message: Yup.string().required(() => t('index.feedback.fields.message.required')),
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
              label={t('index.feedback.fields.name.title')}
            />
            <Field
              className="feedback__input"
              component={TextField}
              required
              type="text"
              fullWidth
              name="email"
              label={t('index.feedback.fields.email.title')}
            />
          </Stack>
          <Field
            className="feedback__input"
            component={TextField}
            required
            type="text"
            fullWidth
            name="message"
            label={t('index.feedback.fields.message.title')}
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
                <Box>{t('index.feedback.submit')}</Box>
              </Stack>
            </Button>
          </Box>
        </Stack>
      )}
    </Formik>
  );
};

export default withCaptcha(FeedbackForm);
