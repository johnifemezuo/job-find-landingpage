import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { openNav } from "../../../base/atom/useAtom";
import Button from "../UI/Button/Button";
import NavLink from "./NavLink";
import { StyledNavLinks } from "./styles/StyledNavbar";

function NavLinks() {
  const [openNavbar, setOpenNavbar] = useAtom(openNav);

  const router = useRouter();

  function addActiveClass(path: any) {
    return router.pathname === path
      ? "text-primary "
      : "text-textColor";
  }

  return (
    <StyledNavLinks $isOpen={openNavbar}>
      <NavLink activeClass={addActiveClass("/")} navLink="/">
        Home
      </NavLink>
      <NavLink activeClass={addActiveClass("/about-us")} navLink="/about-us">About Us</NavLink>
      <NavLink activeClass={addActiveClass("/serivices")} navLink="/services">Services</NavLink>
      <NavLink activeClass={addActiveClass("/jobs")} navLink="/jobs">Jobs</NavLink>
      <NavLink activeClass={addActiveClass("/contact")} navLink="/contact">Contact us</NavLink>

      <div className=" md:hidden space-y-6 bgGradient grid py-12 px-6">
        <Link href="/auth/login">
          <a className="text-base text-white hover:text-primary transition-all">
            Log In
          </a>
        </Link>
        <Button>Get Started </Button>
      </div>
    </StyledNavLinks>
  );
}

export default NavLinks;
