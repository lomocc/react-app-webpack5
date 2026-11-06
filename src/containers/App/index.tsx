import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import styles from './index.module.css';

const RemoteModule1 = React.lazy(
  // @ts-ignore
  () => import('module1/RemoteApp')
);

function App() {
  return (
    <div className={styles.conatiner}>
      <header className={styles.header}>
        <h1>APP</h1>
        <p>
          Edit <code>src/App/index.tsx</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <ErrorBoundary>
          <RemoteModule1 />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
}

export default App;
