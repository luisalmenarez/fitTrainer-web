import Container from "./container";
import Logo from "./logo";
import MainMenu from "./main-menu";

const Header = () => {
  return (
    <header className="w-full left-0 top-0 fixed p-5">
      <Container className="flex items-center justify-between">
        <section>
          <Logo />
        </section>
        <section>
          <MainMenu />
        </section>
      </Container>
    </header>
  );
};

export default Header;
