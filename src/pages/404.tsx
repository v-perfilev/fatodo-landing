import * as React from 'react';
import { useEffect } from 'react';
import { graphql, navigate } from 'gatsby';

const NotFoundPage = () => {
  useEffect(() => {
    navigate('/');
  }, []);

  return <div />;
};

export default NotFoundPage;

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
