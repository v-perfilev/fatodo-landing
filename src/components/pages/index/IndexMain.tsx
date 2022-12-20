import * as React from 'react';
import { Button, Container } from '@mui/material';
import './index.scss';
import AnimateIn from '../../animations/AnimateIn';
import { useI18next } from 'gatsby-plugin-react-i18next';

const IndexMain = () => {
  const { t } = useI18next();

  const redirectToRegister = (): void => {
    window.location.replace('https://app.fatodo.app/registration');
  };

  return (
    <Container className="main">
      <AnimateIn delay={50}>
        <h1 className="main__text main__text--big">{t('index.main.greeting1')}</h1>
      </AnimateIn>
      <AnimateIn delay={200}>
        <h2 className="main__text main__text--medium">{t('index.main.greeting2')}</h2>
      </AnimateIn>
      <AnimateIn delay={300}>
        <Button className="main__button" variant="contained" color="secondary" onClick={redirectToRegister}>
          {t('buttons.join')}
        </Button>
      </AnimateIn>
    </Container>
  );
};

export default IndexMain;
