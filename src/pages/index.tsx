import { BoxNav } from "@/components/Box-nav";
import { Navbar } from "@/components/Navbar";
import { Screen1 } from "@/components/layouts/screen1";
import { Screen2And3 } from "@/components/layouts/screen2-3";
import { Screen4 } from "@/components/layouts/screen4";
import { Screen5 } from "@/components/layouts/screen5";
import { Screen6And7 } from "@/components/layouts/screen6-7";

import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const setHeight = () => {
      const element = document.getElementById('my-element');
      if (element) {
        element.style.minHeight = window.innerHeight + 'px';
      }
    };

    let deviceWidth = window.matchMedia('(max-width: 1024px)');

    if (deviceWidth.matches) {
      window.addEventListener('resize', setHeight);
      setHeight();

      // Fix for address bar issue in mobile browsers
      window.scrollTo(0, 0);
    }

    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, []);
  return (
    <main id='my-element' className="bg-white overflow-x-hidden">
      <Navbar />
      <BoxNav />
      <Screen1 />
      <div className="w-full h-[190vh] bg-[#8c4aed]"></div>
      <Screen2And3 />
      <Screen4 />
      <Screen5 />
      <Screen6And7 />
    </main>
  );
}
