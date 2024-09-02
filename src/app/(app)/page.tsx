"use client";

import { ROUTES } from "@/routes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="border border-solid border-black rounded"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });
          }}
        >
          Wyloguj
        </button>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return (
        <Link
          href={ROUTES.login}
          className="border border-solid border-black rounded"
        >
          Zaloguj
        </Link>
      );
    }
  };

  return <>{showSession()}</>;
};

export default Home;
