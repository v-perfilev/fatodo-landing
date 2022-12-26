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
import { Theme, useMediaQuery } from '@mui/material';

const IndexPage = () => {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Layout>
      <Seo title="Home" />
      <Space height={isMdUp ? 150 : 100} />
      <Banner />
      <Space height={isMdUp ? 130 : 120} />
      <Cards />
      <Space height={isMdUp ? 150 : 100} />
      <Bullets1 />
      <Space height={isMdUp ? 150 : 100} />
      <Bullets2 />
      <Space height={isMdUp ? 150 : 100} />
      <Feedback />
      <Space height={isMdUp ? 130 : 100} />
      <CookiesConsentSnack />
    </Layout>
  );
};

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
