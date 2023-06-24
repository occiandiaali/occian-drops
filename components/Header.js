import { useEffect, useState } from "react";
import Socials from "./Socials";

function Header() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [bgTransparent, setBgTransparent] = useState(0);
  const [padding, setPadding] = useState(20);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    let bgTransparentVar = clientWindowHeight / 600;

    if (bgTransparentVar < 1) {
      let paddingVar = 30 - bgTransparentVar * 20;
      let boxShadowVar = bgTransparentVar * 0.1;
      setBgTransparent(bgTransparentVar);
      setPadding(paddingVar);
    }
  }, [clientWindowHeight]);

  return (
    <div
      style={{
        background: `rgba(255, 255, 255, ${bgTransparent})`,
        padding: `${padding}px 0px 10px 20px`,
      }}
      className="flex justify-between my-8 items-center sticky top-0"
    >
      <h1 className="font-medium text-xl ">Occian Drops 💧</h1>
      <div className="ml-16">
        <Socials />
        <a
          href="https://occian-diaali.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 ml-4 md:pt-1"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}

export default Header;
