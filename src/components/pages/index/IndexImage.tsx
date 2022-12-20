import * as React from 'react';
import { Card, Container } from '@mui/material';
import './index.scss';
import AnimateIn from '../../animations/AnimateIn';
import { StaticImage } from 'gatsby-plugin-image';

const IndexImage = () => {
  return (
    <Container className="image">
      <AnimateIn direction="down" delay={300}>
        <Card className="image__card" elevation={3}>
          <StaticImage src="../../../../static/images/screenshot_desktop.png" alt="Fatodo Screenshot" />
        </Card>
      </AnimateIn>
    </Container>
  );
};

export default IndexImage;
