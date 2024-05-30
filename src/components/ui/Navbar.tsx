"use client";
import { useEffect, useState, Suspense } from "react";
import { VscGithub } from "react-icons/vsc";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import SearchModal from "./SearchModal";
import { NavLinks } from "@/utils/Links";
import Link from "next/link";
import LoginBtn from "../LoginBtn";
import ProfileDropdown from "../ProfileDropdown";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className="border-default-200 backdrop-blur-lg border-b"
    >
      <NavbarContent justify="start">
        <Link
          href={"/"}
          className="text-3xl font-bold tracking-wide text-foreground-800"
        >
          Mint UI
        </Link>
      </NavbarContent>
      <NavbarContent className="" justify="start">
        {NavLinks.map((link) => (
          <NavbarItem key={link.path} className="hidden md:block ">
            <Link href={link.path} className="text-foreground-800">
              {link.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="max-md:hidden">
          <SearchModal />
        </div>
        <div className="m-3 w-[1.5px] h-[75%] bg-default-100 md:block hidden" />
        <Link
          target="_blank"
          href={"https://github.com/adilsarfraz02"}
          className="active:scale-90 max-md:hidden transition-all duration-300"
        >
          <VscGithub className="size-6  active:scale-90 transition-all duration-300" />
        </Link>
        
          <ThemeSwitcher />
        {/* {userData ? <ProfileDropdown /> : <LoginBtn />} */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <SearchModal />
        </NavbarMenuItem>
        {NavLinks.map((link, i) => (
          <NavbarMenuItem key={i}>
            <Link href={link.path} className="text-foreground-800">
              {link.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
