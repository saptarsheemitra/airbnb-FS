'use client';

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full z-10 shadow-sm">
      <div className="p-4 border-b">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo/>
            <Search/>
            <UserMenu/>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar;