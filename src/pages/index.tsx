import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import Seo from '../components/layout/Seo';
import IndexMain from '../components/pages/index/IndexMain';
import IndexImage from '../components/pages/index/IndexImage';
import IndexBullets from '../components/pages/index/IndexBullets';
import IndexCards1 from '../components/pages/index/IndexCards1';
import IndexCards2 from '../components/pages/index/IndexCards2';
import IndexCards3 from '../components/pages/index/IndexCards3';
import Spacer from '../components/surfaces/spacer/Spacer';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <IndexMain />
    <IndexImage />
    <Spacer height={100} />
    <IndexBullets />
    <Spacer height={25} />
    <IndexCards1 />
    <IndexCards2 />
    <IndexCards3 />
    <Spacer height={25} />
  </Layout>
);

export default IndexPage;

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
