import React, { ReactElement } from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './index';

export default {
  title: 'Button1',
  decorators: [withKnobs],
};

const buttonText = text('text', 'button text');

export const ButtonStory = (): ReactElement => (
  <Button onClick={() => 0}>
    {buttonText}
  </Button>
);
