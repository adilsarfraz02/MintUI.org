"use client";

import { Button, Image, Link } from "@nextui-org/react";
import React from "react";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
      <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <Image
            isBlurred
            src="https://illustrations.popsy.co/white/resistance-band.svg"
            alt="question-mark"
            className="h-[400px] w-auto dark:invert"
          />
          <div>
            <p className="mt-6 text-5xl font-bold">404</p>
            <h1 className="mt-4 text-2xl font-semibold  md:text-3xl">
              We can&apos;t find that page
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn&apos;t exist or has been
              moved.
            </p>
            <div className="mt-6 flex items-center space-x-3">
              <Link href="/" className="group transition-all duration-300">
                <Button
                  radius="full"
                  className="inline-flex items-center border border-black px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Go Home <span aria-hidden="true" className="group-hover:ml-2 transition-all">→</span>
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button
                  radius="full"
                  className=" bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:invert focus-visible:outline-black"
                >
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
