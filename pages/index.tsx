import { signIn, signOut, useSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in <br />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                signIn();
              }}
            >
              Sign In
            </button>
          </>
        )}
        {session && (
          <>
            <button>
              <Link href="/protected">Go to protected page</Link>
            </button>
            <button
              className="bg-yellow-600 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                signOut();
              }}
            >
              sign out
            </button>
          </>
        )}
      </main>
    </div>
  );
}
