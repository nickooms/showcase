import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Background from './Background';
import Button from '../src/Button';
import Icon from '../src/Button/Icon';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Text', () => (
    <Background>
      <Button>Hello Button</Button>
      <Button alpha>Alpha</Button>
      <Button beta>Beta</Button>
      <Button gamma>Gamma</Button>
    </Background>
  ))
  .add('Emoji', () => (
    <Background>
      <Button>
        <Icon>😀 😎 👍 💯</Icon>
      </Button>
      <Button alpha>
        <Icon>😀 😎 👍 💯</Icon>
      </Button>
      <Button beta>
        <Icon>😀 😎 👍 💯</Icon>
      </Button>
      <Button gamma>
        <Icon>😀 😎 👍 💯</Icon>
      </Button>
    </Background>
  ));
