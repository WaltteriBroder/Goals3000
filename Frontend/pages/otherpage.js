import { body } from '../styles/global';
import Link from 'next/link';

export default () => (
  <div>
    <h1>This is some other page</h1>
    <Link href="/">
      <button>Home</button>
    </Link>

    <style jsx global>{body}</style>
  </div>
);
