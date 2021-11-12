import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Castro</title>
        <meta name="description" content="Kevin Castro is building on web3." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description + " " + styles.text}>
          Kevin Castro is a web3
        </p>
        <span
          className={styles.text + " " + styles.dynamic_word}
          id={styles.dynamic}
        ></span>
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
        <p className={styles.previously + " " + styles.text}>
          Previously at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.certik.io/"
          >
            Certik
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.telco.in/"
          >
            Telcoin
          </a>
          .
        </p>
        <p className={styles.links}>
          @ —{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/_etherean"
          >
            Twitter
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rainbow.me/aac.eth"
          >
            Rainbow
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherean.substack.com/"
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
