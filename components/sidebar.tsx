import { FC } from 'react';
import Link from 'next/link';

const Sidebar: FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <Link href="/views/home" as="/home">
          <a
            style={{
              fontSize: 22,
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            EXAMPLE APP
          </a>
        </Link>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link href="/views/home" as="/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/views/about" as="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
