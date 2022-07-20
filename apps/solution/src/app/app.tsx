import { Link, Outlet } from 'react-router-dom';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>SF≡IR People</h1>
      <ul>
        <li><Link to="/people">People</Link></li>
      </ul>
    </header>
  )
}

export default App;
