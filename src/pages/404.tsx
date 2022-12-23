import * as React from 'react';
import { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFoundPage = () => {
  useEffect(() => {
    navigate('/').then();
  }, []);
  return <div />;
};

export default NotFoundPage;
