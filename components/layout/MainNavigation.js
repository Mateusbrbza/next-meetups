import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>reunioes</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Todas reunioes</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Adicionar reuniao</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
