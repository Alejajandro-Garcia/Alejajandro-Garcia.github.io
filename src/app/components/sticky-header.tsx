import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#About-Section", label: "About" },
  { href: "#Projects", label: "Projects" },
  { href: "#skills-section", label: "Skills" },
];

export default function StickyHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar fixed w-[calc(100vw)] z-40 bg-black/60">
      {/* LEFT */}
      <div className="navbar-start">
        <Image
          src="Alejandro-Garcia-Portfolio/cow.svg"
          alt="cow PFP"
          width={70}
          height={70}
        />
        <span className="whitespace-nowrap text-xl md:text-4xl pl-3 md:pl-5">
          Alejandro Garcia
        </span>
      </div>

      {/* RIGHT */}
      <div className="navbar-end relative">
        {/* Desktop links */}
        <div className="hidden md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-2xl md:text-4xl mr-4">
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden btn btn-ghost text-3xl"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile menu (right-aligned) */}
        {open && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-black rounded-box shadow z-50 md:hidden">
            <ul className="menu p-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
