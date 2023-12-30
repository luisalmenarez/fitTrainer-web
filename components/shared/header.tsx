"use client";

import { useState } from "react";
import IconMenu from "../ui/icon-menu";
import Container from "./container";
import Logo from "./logo";
import MainMenu from "./main-menu";
import MenuMobile from "./menu-mobile";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="w-full left-0 top-0 fixed p-5 z-40">
        <Container className="flex items-center justify-between">
          <section>
            <Logo />
          </section>
          <section className="hidden lg:block">
            <MainMenu />
          </section>
          <section className="lg:hidden">
            <button onClick={() => setShowMenu(true)} type="button">
              <IconMenu isOpen={showMenu} />
            </button>
          </section>
        </Container>
      </header>
      <MenuMobile isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Header;
