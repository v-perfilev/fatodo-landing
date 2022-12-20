import * as React from 'react';
import { ReactNode } from 'react';
import { Box, Container, Grid } from '@mui/material';
import AnimateIn from '../../animations/AnimateIn';
import './cards.scss';

type CardsProps = {
  leftContent: ReactNode;
  rightContent: ReactNode;
  backgroundColor?: string;
};

const Cards = ({ leftContent, rightContent, backgroundColor }: CardsProps) => {
  const style = { backgroundColor };

  return (
    <Box className="cards" style={style}>
      <Container>
        <Grid container justifyContent="center" alignItems="stretch" spacing={8}>
          <Grid className="cards__item" item xs={10} lg={5}>
            <AnimateIn direction="left" threshold={0.1} delay={50}>
              {leftContent}
            </AnimateIn>
          </Grid>
          <Grid className="cards__item" item xs={10} lg={5}>
            <AnimateIn direction="right" threshold={0.1} delay={50}>
              {rightContent}
            </AnimateIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cards;
