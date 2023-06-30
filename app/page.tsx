import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <h1>Home Page</h1>
        <Link href="/about">Link To About Page </Link>
        <Link href="/users">Users</Link>
      </div>
    </main>
  )
}
