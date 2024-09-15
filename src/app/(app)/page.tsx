import { Routes } from "@/routes";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";

const Home = async () => {
  const session = await getServerSession();

  const showSession = () => {
    if (session) {
      return <Link href="/">Wyloguj</Link>;
    } else {
      return (
        <Link
          className="border border-solid border-black rounded"
          href={Routes.Login}
        >
          Zaloguj
        </Link>
      );
    }
  };

  return <>{showSession()}</>;
};

export default Home;
