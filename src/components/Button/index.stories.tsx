import React, { ReactElement } from 'react';
import { text } from '@storybook/addon-knobs';
import Button from './index';

export default {
  title: 'components/button',
};

const buttonText = text('text', 'button text');

export const ButtonStory = (): ReactElement => (
  <Button onClick={() => 0}>
    {buttonText}
  </Button>
);
