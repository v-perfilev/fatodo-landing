import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import Seo from '../components/layout/Seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/*<IndexMain />*/}
    {/*<IndexImage />*/}
    {/*<Spacer height={100} />*/}
    {/*<IndexBullets />*/}
    {/*<Spacer height={25} />*/}
    {/*<IndexCards1 />*/}
    {/*<IndexCards2 />*/}
    {/*<IndexCards3 />*/}
    {/*<Spacer height={25} />*/}
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
