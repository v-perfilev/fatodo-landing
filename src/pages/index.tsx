import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import Seo from '../components/layout/Seo';
import Feedback from '../components/content/feedback/Feedback';
import Cards from '../components/content/cards/Cards';
import Bullets1 from '../components/content/bullets/Bullets1';
import Bullets2 from '../components/content/bullets/Bullets2';
import Banner from '../components/content/banner/Banner';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Banner />
    <Cards />
    <Bullets1 />
    <Bullets2 />
    <Feedback />
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
