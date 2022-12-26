import * as React from 'react';
import { useEffect } from 'react';
import { graphql, navigate } from 'gatsby';
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '../constants';

const AppStoreDetectorPage = () => {
  const getOS = (): string => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = '';

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }

    return os;
  };

  const isAppleDevice = (os: string): boolean => {
    const appleSystems = ['Mac OS', 'iOS'];
    return appleSystems.includes(os);
  };

  useEffect(() => {
    const os = getOS();
    const link = isAppleDevice(os) ? APPLE_STORE_URL : GOOGLE_PLAY_URL;
    navigate(link);
  }, []);

  return <div />;
};

export default AppStoreDetectorPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
