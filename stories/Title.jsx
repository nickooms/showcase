import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import Background from './Background';
import Title from '../src/Title';

storiesOf('Title', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Background>
      <Title>{text('Content', 'Content')}</Title>
    </Background>
  ));
