import React from 'react';
import PropTypes from 'prop-types';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

const AppBar = ({ children }) => (
  <>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon
              hasRipple
              icon="menu"
              onClick={() => console.log('click')}
            />
          </TopAppBarIcon>
          <TopAppBarTitle>Nick Ooms</TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection align="end" role="toolbar">
          <TopAppBarIcon actionItem tabIndex={0}>
            <MaterialIcon
              aria-label="print page"
              hasRipple
              icon="print"
              onClick={() => console.log('print')}
            />
          </TopAppBarIcon>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
  </>
);

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppBar;
