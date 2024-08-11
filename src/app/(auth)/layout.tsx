import { Card } from "@nextui-org/react";
import Image from "next/image";
import { ReactNode } from "react";
import { Providers } from "../../providers";
import "../globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <Providers>
        <section className="w-full h-screen flex items-center justify-center">
          <Card className="w-full max-w-[1200px] lg:grid lg:grid-cols-2 m-6 lg:m-0">
            <div className="p-6">{children}</div>
            <div className="hidden relative lg:flex">
              <Image
                src="/assets/images/auth_background.jpg"
                alt="Tło matematyczne"
                fill
              />
            </div>
          </Card>
        </section>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
