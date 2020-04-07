import React, { ReactElement } from 'react';
import { text } from '@storybook/addon-knobs';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';
import Input from './index';


export default {
  title: 'Components/Input',
};

const InputStory = (): ReactElement => (
  <Input
    type="text"
    placeholder={text('placeholder', 'placeholder')}
  />
);


export const mango = Mango<{}>(InputStory);

export const skyline = Skyline<{}>(InputStory);
