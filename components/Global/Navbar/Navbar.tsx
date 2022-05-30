import Link from "next/link";
import React, { useState } from "react";
import Container from "../../../Layout/Container";
import Button from "../UI/Button/Button";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import { StyledNavbarWrapper } from "./styles/StyledNavbar";
import { useAtom } from "jotai";
import { openNav } from "../../../base/atom/useAtom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../base/stores/store";
import { loginUser, logUserName } from "../../Pages/authslices/counterSlice";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useAtom(openNav);
  const isLogin = useSelector((state: RootState) => state.user.login);
  const dispatch = useDispatch();

  function handleChange(user: any) {
    dispatch(logUserName(user));
  }
  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      handleChange(user?.email);
      dispatch(loginUser());
    }
  });

  const logOut = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <div className="absolute z-50 top-0 right-0 left-0">
      <Container>
        <StyledNavbarWrapper>
          <Logo />

          <NavLinks />

          <div
            onClick={() => setOpenNavbar(!openNavbar)}
            className="block lg:hidden mt-8 md:mt-0"
          >
            <img src="/images/menu.png" className="w-8" />
          </div>

          {isLogin ? (
            <div className="space-x-6 hidden grid-cols-2 items-center  lg:block ">
              <button className=" text-white w-[100px] bg-[#8e8ef9] py-1 px-3 rounded-full text-ellipsis overflow-hidden">
                {user.email}
              </button>
              <Button onClick={logOut}>Log out</Button>
            </div>
          ) : (
            <div className="space-x-6 hidden lg:block ">
              <Link href={`/auth/login`}>
                <a className="text-base text-white hover:text-primary transition-all">
                  Log In
                </a>
              </Link>
              <Link href={`/auth/register`}>
                <Button> sign up</Button>
              </Link>
            </div>
          )}
        </StyledNavbarWrapper>
      </Container>
    </div>
  );
}

export default Navbar;
