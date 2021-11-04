import { signIn, signOut, useSession } from "next-auth/client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
export default function Secret() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/protected");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  return (
    <main className={styles.main}>
      {!session && (
        <>
          <p className="text-6xl"> Access denied </p>

          <a
            href="#"
            className=""
            onClick={() => {
              signIn();
            }}
          >
            you must be signed in to view this page
          </a>
          <button
            onClick={() => {
              signIn();
            }}
            className="bg-green-500 active:bg-green-700 ..."
          >
            sign in
          </button>
        </>
      )}
      {session && (
        <>
          <p className=" md:underline ...">
            This is a protected content!You can access this content because you
            are signed in
          </p>
          <button
            className="bg-yellow-600 w-24 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded w-24 ..."
            onClick={() => {
              signOut();
            }}
          >
            sign out
          </button>
        </>
      )}
    </main>
  );
}
