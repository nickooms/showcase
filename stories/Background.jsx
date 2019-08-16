import React from 'react';

const styles = {
  Background: {
    backgroundColor: '#666',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexGap: '30px',
  },
  Padding: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '30px',
  },
};

const Background = ({ children }) => (
  <div style={styles.Background}>
    <div style={styles.Padding}>{children}</div>
  </div>
);

export default Background;
