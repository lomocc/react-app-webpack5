import React from 'react';
import styles from './index.module.css';
import logo from './logo.svg';

function App() {
  return (
    <header className={styles.header}>
      <h1>RemoteApp</h1>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        Edit <code>src/RemoteApp/index.tsx</code> and save to reload.
      </p>
    </header>
  );
}

export default App;
