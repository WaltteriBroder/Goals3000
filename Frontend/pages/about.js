import { body } from '../styles/styles';
import Link from 'next/link';

export default () => (
  <div>
    <h1>About!</h1>
    <Link href="/">
      <button>Home</button>
    </Link>

    <style jsx global>{body}</style>
  </div>
);
