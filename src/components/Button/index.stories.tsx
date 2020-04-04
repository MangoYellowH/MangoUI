import React, { ReactElement } from 'react';
import { text } from '@storybook/addon-knobs';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';
import Button from './index';

export default {
  title: 'components/button',
};

const ButtonStory = (): ReactElement => (
  <Button onClick={() => 0}>
    {text('text', 'button text')}
  </Button>
);

export const mango = Mango<{}>(ButtonStory);

export const skyline = Skyline<{}>(ButtonStory);
