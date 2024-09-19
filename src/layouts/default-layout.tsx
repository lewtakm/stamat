"use client";

import { Header, Sidebar } from "@/components";
import { Session } from "next-auth";
import { ReactNode, useState } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
  userData: null | Session;
}

export const DefaultLayout = ({ children, userData }: DefaultLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <Sidebar
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          userData={userData}
        />
        <div className="relative flex flex-1 flex-col lg:ml-72.5">
          <Header
            setSidebarOpen={setSidebarOpen}
            sidebarOpen={sidebarOpen}
            userData={userData}
          />
          <main>
            <div className="mx-auto h-full">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};
