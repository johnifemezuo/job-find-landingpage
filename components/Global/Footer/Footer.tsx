import Link from "next/link";
import React from "react";
import { createLogicalNot } from "typescript";
import Container from "../../../Layout/Container";
import Logo from "../Logo/Logo";

function Footer() {
  type FooterLinks = {
    name: string;
    link: string;
  }[];

  const categories: FooterLinks = [
    { name: "IOS Developers", link: "/" },
    { name: "Frond End Developer", link: "/" },
    { name: "UX Designer", link: "/" },
    { name: "UI Designer", link: "/" },
    { name: "Restorant Service", link: "/" },
    { name: "Marketters", link: "/" },
    { name: "Dancers", link: "/" },
  ];

  return (
    <div className="mt-44 py-12 border-t">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12  lg:space-x-6">
          <div className="space-y-4 text-center">
            <Logo />
            <p className="text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              unde culpa aliquam, voluptatem aliquid minus itaque commodi
              accusamus incidunt non?
            </p>

            <div className="flex space-x-4 text-center mx-auto w-[300px]">
              <span className="grid place-content-center w-14 hover:bg-gray-100 transition rounded-full shadow-lg p-4 bg-white">
                <img
                  src="/images/facebook.png"
                  alt="facebook"
                  className="h-6 w-6  "
                />
              </span>

              <span className="grid place-content-center w-14 hover:bg-gray-100 transition rounded-full shadow-lg p-4 bg-white">
                <img
                  src="/images/twitter.png"
                  alt="facebook"
                  className="h-6 w-6  "
                />
              </span>

              <span className="grid place-content-center w-14 hover:bg-gray-100 transition rounded-full shadow-lg p-4 bg-white">
                <img
                  src="/images/likedin.png"
                  alt="facebook"
                  className="h-6 w-6  "
                />
              </span>

              <span className="grid place-content-center w-14 hover:bg-gray-100 transition rounded-full shadow-lg p-4 bg-white">
                <img
                  src="/images/google.png"
                  alt="facebook"
                  className="h-6 w-6  "
                />
              </span>
            </div>
          </div>

          <div className="">
            <h4 className="text-xl text-primary font-medium">Category</h4>
            <ul className="mt-6   flex md:grid flex-wrap md:flex-nowrap gap-6  lg:list-none list-disc">
              {categories.map(({ name, link }, index) => (
                <li
                  key={index}
                  className="list-inside text-zinc-600  hover:text-primary"
                >
                  <Link href={link}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h4 className="text-xl text-primary font-medium">Community</h4>
            <ul className="mt-6   flex md:grid flex-wrap md:flex-nowrap gap-6  lg:list-none list-disc">
              {categories.map(({ name, link }, index) => (
                <li
                  key={index}
                  className="list-inside text-zinc-600  hover:text-primary"
                >
                  <Link href={link}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h4 className="text-xl text-primary font-medium">About Us</h4>
            <ul className="mt-6   flex md:grid flex-wrap md:flex-nowrap gap-6  lg:list-none list-disc">
              {categories.map(({ name, link }, index) => (
                <li
                  key={index}
                  className="list-inside text-zinc-600  hover:text-primary"
                >
                  <Link href={link}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
