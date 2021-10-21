import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin's Site</title>
        <meta name="description" content="This is me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description + " " + styles.text}>
          Kevin Castro is a web3 <span id={styles.dynamic}></span>.
        </p>
        <p className={styles.currently + " " + styles.text}>
          Currently at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.immutable.com/"
          >
            Immutable
          </a>
          .
        </p>
        <p className={styles.currently + " " + styles.text}>
          Previously at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.certik.io/"
          >
            Certik
          </a>{" "}
          and <a href="https://www.telco.in/">Telcoin</a>.
        </p>
        <p className={styles.links}>
          @ —{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/aacdoteth"
          >
            Twitter
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.telco.in/"
          >
            Rainbow
          </a>
          ,
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.telco.in/"
          >
            Substack
          </a>
          .
        </p>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
