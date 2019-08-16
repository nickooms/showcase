import React, { useState } from 'react';
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListGroupSubheader,
} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';

import ReactIcon from '../icons/react.svg';
import NodeIcon from '../icons/node.js.svg';

import './DrawerMenu.scss';

const DrawerMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <List singleSelection selectedIndex={selectedIndex}>
      <ListItem onClick={() => setSelectedIndex(0)}>
        <ListItemGraphic graphic={<MaterialIcon icon="home" />} />
        <ListItemText primaryText="Home" />
      </ListItem>
      <ListGroupSubheader>Technologies</ListGroupSubheader>
      <ListItem onClick={() => setSelectedIndex(1)}>
        <ListItemGraphic graphic={<img src={ReactIcon} alt="" />} />
        <ListItemText primaryText="ReactJS" />
      </ListItem>
      <ListItem onClick={() => setSelectedIndex(2)}>
        <ListItemGraphic graphic={<img src={NodeIcon} alt="" />} />
        <ListItemText primaryText="Node.js" />
      </ListItem>
    </List>
  );
};

export default DrawerMenu;
