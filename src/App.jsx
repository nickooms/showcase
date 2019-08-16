import React from 'react';
import Button from '@material/react-button';

import Drawer from './Drawer';
import AppBar from './AppBar';

import './App.scss';

const App = () => (
  <div>
    <Drawer>
      <AppBar>
        <h1>React</h1>
        <Button raised onClick={() => console.log('clicked!')}>
          Click Me!
        </Button>
      </AppBar>
    </Drawer>
  </div>
);

export default App;
