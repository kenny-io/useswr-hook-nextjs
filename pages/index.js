import Head from "next/head";
import styles from "../styles/Home.module.css";
import Users from "../components/Users";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(6);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Random user generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "none" }}>
        <Users count={count + 3} />
      </div>
      <Users count={count} setCount={setCount} />

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/kenny_io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with love by Ekene Eze
        </a>
      </footer>
    </div>
  );
}
