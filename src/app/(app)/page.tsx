import { ROUTES } from "@/routes";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Home = async () => {
  const session = await getServerSession();

  const showSession = () => {
    if (session) {
      return <Link href="/">Wyloguj</Link>;
    } else {
      return (
        <Link
          className="border border-solid border-black rounded"
          href={ROUTES.login}
        >
          Zaloguj
        </Link>
      );
    }
  };

  return <>{showSession()}</>;
};

export default Home;
