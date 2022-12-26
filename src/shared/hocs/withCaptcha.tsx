import React, { ComponentType } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { flowRight } from 'lodash';
import { RECAPTCHA_KEY } from '../../constants';

export type CaptchaProps = {
  getToken: () => Promise<string>;
};

const withCaptcha = (Component: ComponentType<CaptchaProps>) => (props: any) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getToken = async (): Promise<string> => {
    // @ts-ignore
    return await executeRecaptcha();
  };

  return <Component {...props} getToken={getToken} />;
};

const withCaptchaProvider = (Component: ComponentType) => (props: any) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
      <Component {...props} />
    </GoogleReCaptchaProvider>
  );
};

export default flowRight([withCaptchaProvider, withCaptcha]);
