import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'authorization';

import styles from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/contacts" />
      ) : (
        <div className={styles.section}>
          <h1 className={styles.title}>Welcome to the phonebook</h1>
        </div>
      )}
    </>
  );
}
