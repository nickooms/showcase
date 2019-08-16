import React from 'react';
import PropTypes from 'prop-types';
import AppDrawer, {
  DrawerAppContent,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@material/react-drawer';

import DrawerMenu from '../DrawerMenu';

import './Drawer.scss';

const Drawer = ({ children }) => (
  <div className="drawer-container">
    <AppDrawer>
      <DrawerHeader>
        <DrawerTitle tag="h2">Nick Ooms</DrawerTitle>
        <p className="drawer-subtitle">Full-Stack JavaScript Dev</p>
      </DrawerHeader>
      <DrawerContent>
        <DrawerMenu />
      </DrawerContent>
    </AppDrawer>
    <DrawerAppContent className="drawer-app-content">
      {children}
    </DrawerAppContent>
  </div>
);

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Drawer;
