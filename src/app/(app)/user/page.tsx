"use client";

import { useSession } from "next-auth/react";

const UserPage = () => {
  const { data } = useSession();
  return <div>Zalogowany jako {data?.user?.email}</div>;
};

export default UserPage;
