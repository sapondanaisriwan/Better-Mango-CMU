import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import ExtensionSetting from "./ExtensionSetting";
import Logo from "../icon/Logo";
// import Logo from "../icon/logo";

function Header() {
  return (
    <Navbar className="dark:bg-content2">
      <NavbarBrand className="gap-2">
        <a
          href="https://github.com/sapondanaisriwan/Cool-Mango-CMU"
          target="_blank"
          className="flex items-center gap-2"
        >
          <h4>
            <Logo />
          </h4>
          <p className="select-none text-lg font-semibold bg-gradient-to-r from-[#23DBF9] to-[#FFD232] bg-clip-text text-transparent">
            Cool Mango
          </p>
        </a>
      </NavbarBrand>
      <NavbarContent justify="end">
        <ExtensionSetting />
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
