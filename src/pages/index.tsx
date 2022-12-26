import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import Seo from '../components/layout/Seo';
import Feedback from '../components/content/feedback/Feedback';
import Cards from '../components/content/cards/Cards';
import Bullets1 from '../components/content/bullets/Bullets1';
import Bullets2 from '../components/content/bullets/Bullets2';
import Banner from '../components/content/banner/Banner';
import CookiesConsentSnack from '../components/snacks/CookiesConsentSnack';
import Space from '../components/layout/Space';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Space height={160} />
    <Banner />
    <Space height={130} />
    <Cards />
    <Space height={150} />
    <Bullets1 />
    <Space height={150} />
    <Bullets2 />
    <Space height={150} />
    <Feedback />
    <Space height={130} />
    <CookiesConsentSnack />
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
